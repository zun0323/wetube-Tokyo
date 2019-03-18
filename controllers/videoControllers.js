import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const serach = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "search", searchingBy, videos });
};

export const getUplode = (req, res) =>
  res.render("uplode", { pageTitle: "uplode" });

export const postUplode = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  res.redirect(routes.videoDetail(334232));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "videoDetail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "editVideo" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "deleteVideo" });
