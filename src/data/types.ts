export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export interface Platform{

    id: number,
    name: string,
    slug: string,

}
