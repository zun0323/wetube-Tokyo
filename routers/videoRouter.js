import express from "express";
import routes from "../routes";
import {
  getUplode,
  postUplode,
  videoDetail,
  editVideo,
  deleteVideo
} from "../controllers/videoControllers";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.uplode, getUplode);
videoRouter.post(routes.uplode, uploadVideo, postUplode);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
