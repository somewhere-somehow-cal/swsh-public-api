/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SwshApi from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";
export class Album {
    constructor(_options) {
        this._options = _options;
    }
    /**
     * @throws {@link SwshApi.BadRequestError}
     *
     * @example
     *     await swshApi.album.createAlbum({
     *         name: "My Album"
     *     })
     */
    createAlbum(request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: urlJoin((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.SwshApiEnvironment.Default, "album/createAlbum"),
                method: "POST",
                headers: {
                    "x-api-key": yield core.Supplier.get(this._options.apiKey),
                    "X-Fern-Language": "JavaScript",
                },
                contentType: "application/json",
                body: yield serializers.RequestBodyCreateAlbum.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
            });
            if (_response.ok) {
                return yield serializers.ResponseSingleAlbum.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SwshApi.BadRequestError(_response.error.body);
                    default:
                        throw new errors.SwshApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.SwshApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.SwshApiTimeoutError();
                case "unknown":
                    throw new errors.SwshApiError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    /**
     * @throws {@link SwshApi.BadRequestError}
     * @throws {@link SwshApi.NotFoundError}
     *
     * @example
     *     await swshApi.album.getAlbum({
     *         albumId: "11111111-1111-1111-1111-111111111111"
     *     })
     */
    getAlbum(request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { albumId } = request;
            const _queryParams = {};
            _queryParams["albumId"] = albumId;
            const _response = yield core.fetcher({
                url: urlJoin((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.SwshApiEnvironment.Default, "album/getAlbum"),
                method: "GET",
                headers: {
                    "x-api-key": yield core.Supplier.get(this._options.apiKey),
                    "X-Fern-Language": "JavaScript",
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
            });
            if (_response.ok) {
                return yield serializers.ResponseSingleAlbum.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SwshApi.BadRequestError(_response.error.body);
                    case 404:
                        throw new SwshApi.NotFoundError(_response.error.body);
                    default:
                        throw new errors.SwshApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.SwshApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.SwshApiTimeoutError();
                case "unknown":
                    throw new errors.SwshApiError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    getAlbums(request = {}, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { limit, cursor } = request;
            const _queryParams = {};
            if (limit != null) {
                _queryParams["limit"] = limit.toString();
            }
            if (cursor != null) {
                _queryParams["cursor"] = cursor;
            }
            const _response = yield core.fetcher({
                url: urlJoin((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.SwshApiEnvironment.Default, "album/getAlbums"),
                method: "GET",
                headers: {
                    "x-api-key": yield core.Supplier.get(this._options.apiKey),
                    "X-Fern-Language": "JavaScript",
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                maxRetries: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.maxRetries,
            });
            if (_response.ok) {
                return yield serializers.ResponseAlbumsCursor.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                throw new errors.SwshApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.body,
                });
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.SwshApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.SwshApiTimeoutError();
                case "unknown":
                    throw new errors.SwshApiError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
}
