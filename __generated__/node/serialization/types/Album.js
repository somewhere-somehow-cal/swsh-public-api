/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../core";
export const Album = core.serialization.object({
    albumId: core.serialization.string(),
    name: core.serialization.string().optional(),
    ownerId: core.serialization.string().optional(),
    shareUrl: core.serialization.string().optional(),
});