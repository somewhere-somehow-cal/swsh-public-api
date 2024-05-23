/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as SwshApi from "../../api";
import * as core from "../../core";
export declare const ResponsePingData: core.serialization.ObjectSchema<serializers.ResponsePingData.Raw, SwshApi.ResponsePingData>;
export declare namespace ResponsePingData {
    interface Raw {
        message: string;
        callerId: string;
    }
}
