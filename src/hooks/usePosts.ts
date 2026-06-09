import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase, type Post } from '@/lib/supabase';

const POST_COLUMNS = 'id, title, slug, excerpt, content, published, likes_count, created_at, updated_at';

/** Posts publicados, mais recentes primeiro — usado na listagem pública do blog. */
export function usePublishedPosts() {
  return useQuery({
    queryKey: ['posts', 'published'],
    queryFn: async (): Promise<Post[]> => {
      const { data, error } = await supabase
        .from('posts')
        .select(POST_COLUMNS)
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data ?? [];
    },
  });
}

/** Um post pelo slug (página pública). */
export function usePost(slug: string | undefined) {
  return useQuery({
    queryKey: ['post', slug],
    enabled: !!slug,
    queryFn: async (): Promise<Post | null> => {
      const { data, error } = await supabase
        .from('posts')
        .select(POST_COLUMNS)
        .eq('slug', slug)
        .maybeSingle();

      if (error) throw error;
      return data;
    },
  });
}

/** Todos os posts (inclui rascunhos) — só funciona logado como admin (RLS). */
export function useAllPosts() {
  return useQuery({
    queryKey: ['posts', 'all'],
    queryFn: async (): Promise<Post[]> => {
      const { data, error } = await supabase
        .from('posts')
        .select(POST_COLUMNS)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data ?? [];
    },
  });
}

export interface PostInput {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  published: boolean;
}

export function useCreatePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: PostInput) => {
      const { data, error } = await supabase.from('posts').insert(input).select().single();
      if (error) throw error;
      return data as Post;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
}

export function useUpdatePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...input }: PostInput & { id: string }) => {
      const { data, error } = await supabase
        .from('posts')
        .update({ ...input, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return data as Post;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
}

export function useDeletePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('posts').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
}
