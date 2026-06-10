const STORAGE_KEY = 'blog_visitor_id';

/**
 * Identificador anônimo e estável por navegador, usado para impedir que o mesmo
 * visitante curta um post mais de uma vez. Não é login: é só um UUID no localStorage.
 */
export function getVisitorId(): string {
  if (typeof window === 'undefined') return '';

  let id = window.localStorage.getItem(STORAGE_KEY);
  if (!id) {
    id = crypto.randomUUID();
    window.localStorage.setItem(STORAGE_KEY, id);
  }
  return id;
}
