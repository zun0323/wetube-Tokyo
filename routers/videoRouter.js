import express from "express";
import routes from "../routes";
import {
  getUplode,
  postUplode,
  videoDetail,
  editVideo,
  deleteVideo
} from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get(routes.uplode, getUplode);
videoRouter.post(routes.uplode, postUplode);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
