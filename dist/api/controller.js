"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const youtubei_js_1 = require("youtubei.js");
class controller {
    static testRoute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const youtube = yield youtubei_js_1.Innertube.create({
                    retrieve_player: true
                });
                console.log("Getting video");
                const vodInfo = yield youtube.getInfo("kkX8_nbBqBQ");
                console.log("Got video");
                console.log(vodInfo.basic_info.title);
                res.status(200).json({
                    "Title": vodInfo.basic_info.title,
                    "Creator": vodInfo.basic_info.author,
                    "Views": vodInfo.basic_info.view_count,
                    "HLS-Stream": (_a = vodInfo.streaming_data) === null || _a === void 0 ? void 0 : _a.hls_manifest_url
                });
            }
            catch (error) {
                console.error(`Error on testRoute ${error}`);
                return res.status(500).json({ "error": error });
            }
        });
    }
}
exports.default = controller;
