/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SwshApi from "../../../..";
/**
 * @example
 *     {
 *         albumId: "22222222-2222-2222-2222-222222222222"
 *     }
 */
export interface EditAlbumRequest {
    /** The ID of the album to edit */
    albumId: string;
    name?: SwshApi.AlbumName;
}
