/**
 * This file was auto-generated by Fern from our API Definition.
 */
/**
 * @example
 *     {
 *         limit: 10
 *     }
 */
export interface GetAlbumsRequest {
    /**
     * The maximum number of albums to retrieve
     */
    limit?: number;
    /**
     * A cursor received from a previous request to retrieve the next page of results
     */
    cursor?: string;
}
