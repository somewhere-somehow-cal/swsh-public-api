/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SwshApi from "../../..";
export declare namespace Album {
    interface Options {
        environment?: core.Supplier<environments.SwshApiEnvironment | string>;
        apiKey: core.Supplier<string>;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}
export declare class Album {
    protected readonly _options: Album.Options;
    constructor(_options: Album.Options);
    /**
     * @throws {@link SwshApi.BadRequestError}
     *
     * @example
     *     await swshApi.album.createAlbum({
     *         name: "My Album"
     *     })
     */
    createAlbum(request: SwshApi.CreateAlbumRequest, requestOptions?: Album.RequestOptions): Promise<SwshApi.ResponseSingleAlbum>;
    /**
     * @throws {@link SwshApi.BadRequestError}
     * @throws {@link SwshApi.NotFoundError}
     *
     * @example
     *     await swshApi.album.editAlbum({
     *         albumId: "22222222-2222-2222-2222-222222222222"
     *     })
     */
    editAlbum(request: SwshApi.EditAlbumRequest, requestOptions?: Album.RequestOptions): Promise<SwshApi.ResponseSingleAlbum>;
    /**
     * @throws {@link SwshApi.BadRequestError}
     * @throws {@link SwshApi.NotFoundError}
     *
     * @example
     *     await swshApi.album.deleteAlbum({
     *         albumId: "22222222-2222-2222-2222-222222222222"
     *     })
     */
    deleteAlbum(request: SwshApi.DeleteAlbumRequest, requestOptions?: Album.RequestOptions): Promise<SwshApi.ResponseSuccess>;
    /**
     * @throws {@link SwshApi.BadRequestError}
     * @throws {@link SwshApi.NotFoundError}
     *
     * @example
     *     await swshApi.album.getAlbum({
     *         albumId: "22222222-2222-2222-2222-222222222222"
     *     })
     */
    getAlbum(request: SwshApi.GetAlbumRequest, requestOptions?: Album.RequestOptions): Promise<SwshApi.ResponseSingleAlbum>;
    /**
     * @throws {@link SwshApi.BadRequestError}
     *
     * @example
     *     await swshApi.album.getAlbums({
     *         limit: 10
     *     })
     */
    getAlbums(request?: SwshApi.GetAlbumsRequest, requestOptions?: Album.RequestOptions): Promise<SwshApi.ResponseAlbumsCursor>;
    /**
     * Preview photos are a subset of the album's photos (max. 32 photos) that anyone can view when the preview feature is ON for that album
     * @throws {@link SwshApi.BadRequestError}
     * @throws {@link SwshApi.NotFoundError}
     *
     * @example
     *     await swshApi.album.getPreviewPhotos({
     *         albumId: "22222222-2222-2222-2222-222222222222"
     *     })
     */
    getPreviewPhotos(request: SwshApi.GetPreviewPhotosRequest, requestOptions?: Album.RequestOptions): Promise<SwshApi.ResponsePreviewPhotos>;
}
