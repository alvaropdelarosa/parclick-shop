
export class SearchProductDto {
  title: string | null;
  price_min: string | null;
  price_max: string | null;
  categoryId: string | null;
  limit: number | null;
  offset: number | null;

  constructor(filters: Partial<SearchProductDto>) {
    this.title = filters.title ?? null;
    this.price_min = filters.price_min ?? null;
    this.price_max = filters.price_max ?? null;
    this.categoryId = filters.categoryId ?? null;
    this.limit = filters.limit ?? null;
    this.offset = filters.offset ?? null;
  }

  getParams(): string {
    const properties = Object.keys(this);

    let params = properties.flatMap((x: string) => {
      const key = x as keyof SearchProductDto;

      if (
        (typeof (this[key]) === 'string' && this[key] && this[key] !== '' && this[key] !== '0')
      ) {
        return `${key}=${this[key]}`;
      }

      return;
    })
      .filter(x => x !== undefined);

    if (params.length === 0) {
      return '';
    }

    return `?${params.join('&')}`;
  }
}
