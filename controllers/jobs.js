const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllJobs = async (req, res) => {
  res.send("all Jobs");
};
const getJob = async (req, res) => {
  console.log(req.user);
  res.send("one job get");
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  console.log(req.user, req.body);
  const Job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ Job });
};
const deleteJob = async (req, res) => {
  res.send("deleteJob");
};
const updateJob = async (req, res) => {
  res.send("updateJob");
};

module.exports = { getAllJobs, getJob, createJob, deleteJob, updateJob };
