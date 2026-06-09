import { FormEvent, useState } from 'react';
import { Eye, LogOut, Pencil, Plus, Trash2, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import Seo from '@/components/Seo';
import { useAuth } from '@/contexts/AuthContext';
import {
  useAllPosts,
  useCreatePost,
  useDeletePost,
  useUpdatePost,
  type PostInput,
} from '@/hooks/usePosts';
import type { Post } from '@/lib/supabase';

const EMPTY_FORM: PostInput = { title: '', slug: '', excerpt: '', content: '', published: false };

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(new RegExp('[\\u0300-\\u036f]', 'g'), '') // remove acentos
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const AdminPage = () => {
  const { user, signOut } = useAuth();
  const { data: posts, isLoading } = useAllPosts();
  const createPost = useCreatePost();
  const updatePost = useUpdatePost();
  const deletePost = useDeletePost();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<PostInput>(EMPTY_FORM);
  const [slugTouched, setSlugTouched] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setEditingId(null);
    setSlugTouched(false);
    setShowPreview(false);
  };

  const startEdit = (post: Post) => {
    setEditingId(post.id);
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt ?? '',
      content: post.content,
      published: post.published,
    });
    setSlugTouched(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTitleChange = (title: string) => {
    setForm((prev) => ({ ...prev, title, slug: slugTouched ? prev.slug : slugify(title) }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload: PostInput = { ...form, slug: form.slug || slugify(form.title) };

    try {
      if (editingId) {
        await updatePost.mutateAsync({ id: editingId, ...payload });
        toast.success('Post atualizado.');
      } else {
        await createPost.mutateAsync(payload);
        toast.success('Post criado.');
      }
      resetForm();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erro ao salvar.';
      toast.error(message.includes('duplicate') ? 'Já existe um post com esse slug.' : message);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Excluir este post? Esta ação não pode ser desfeita.')) return;
    try {
      await deletePost.mutateAsync(id);
      toast.success('Post excluído.');
      if (editingId === id) resetForm();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Erro ao excluir.');
    }
  };

  const saving = createPost.isPending || updatePost.isPending;

  return (
    <section className="site-shell px-4 py-8 sm:px-6">
      <Seo title="Painel do blog" description="Gerenciamento de posts." path="/admin" noindex />
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="eyebrow">Painel</span>
            <h1 className="mt-3 text-3xl font-extrabold text-foreground">Gerenciar posts</h1>
            <p className="mt-1 text-sm text-muted-foreground">{user?.email}</p>
          </div>
          <Button variant="outline" onClick={() => signOut()}>
            <LogOut className="h-4 w-4" />
            Sair
          </Button>
        </header>

        {/* Editor */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-[1.8rem] bg-card p-6 [box-shadow:inset_0_0_0_1px_rgba(17,17,17,0.06)] sm:p-8"
        >
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-foreground">
              {editingId ? 'Editar post' : 'Novo post'}
            </h2>
            {editingId && (
              <Button type="button" variant="ghost" size="sm" onClick={resetForm}>
                <X className="h-4 w-4" />
                Cancelar edição
              </Button>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              required
              value={form.title}
              onChange={(e) => handleTitleChange(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="slug">Slug (URL)</Label>
            <Input
              id="slug"
              required
              value={form.slug}
              onChange={(e) => {
                setSlugTouched(true);
                setForm((prev) => ({ ...prev, slug: e.target.value }));
              }}
            />
            <p className="text-xs text-muted-foreground">/blog/{form.slug || 'seu-post'}</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Resumo (aparece na listagem)</Label>
            <Textarea
              id="excerpt"
              rows={2}
              value={form.excerpt}
              onChange={(e) => setForm((prev) => ({ ...prev, excerpt: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="content">Conteúdo (Markdown)</Label>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setShowPreview((v) => !v)}
              >
                <Eye className="h-4 w-4" />
                {showPreview ? 'Editar' : 'Preview'}
              </Button>
            </div>
            {showPreview ? (
              <div className="prose prose-neutral min-h-[16rem] max-w-none rounded-md border border-input bg-background p-4 dark:prose-invert">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {form.content || '_Nada para mostrar ainda._'}
                </ReactMarkdown>
              </div>
            ) : (
              <Textarea
                id="content"
                required
                rows={16}
                className="font-mono text-sm"
                placeholder={'# Título\n\nEscreva em **Markdown**. Suporta listas, `código`, links, etc.'}
                value={form.content}
                onChange={(e) => setForm((prev) => ({ ...prev, content: e.target.value }))}
              />
            )}
          </div>

          <div className="flex items-center justify-between rounded-md border border-input p-4">
            <div>
              <Label htmlFor="published" className="cursor-pointer">Publicado</Label>
              <p className="text-xs text-muted-foreground">
                {form.published ? 'Visível no blog público.' : 'Rascunho — só você vê.'}
              </p>
            </div>
            <Switch
              id="published"
              checked={form.published}
              onCheckedChange={(checked) => setForm((prev) => ({ ...prev, published: checked }))}
            />
          </div>

          <Button type="submit" disabled={saving}>
            <Plus className="h-4 w-4" />
            {saving ? 'Salvando…' : editingId ? 'Salvar alterações' : 'Criar post'}
          </Button>
        </form>

        {/* Lista */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">Todos os posts</h2>
          {isLoading ? (
            <p className="text-sm text-muted-foreground">Carregando…</p>
          ) : posts && posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-[1.2rem] bg-card p-4 [box-shadow:inset_0_0_0_1px_rgba(17,17,17,0.06)]"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="truncate font-semibold text-foreground">{post.title}</p>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${
                        post.published
                          ? 'bg-foreground text-background'
                          : 'bg-secondary text-muted-foreground'
                      }`}
                    >
                      {post.published ? 'Publicado' : 'Rascunho'}
                    </span>
                  </div>
                  <p className="truncate text-xs text-muted-foreground">
                    /blog/{post.slug} · {post.likes_count} curtidas
                  </p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <Button variant="outline" size="sm" onClick={() => startEdit(post)}>
                    <Pencil className="h-4 w-4" />
                    Editar
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(post.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">Nenhum post ainda. Crie o primeiro acima.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminPage;
