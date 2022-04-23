const getAllJobs = async (req, res) => {
  res.send("all Jobs");
};
const getJob = async (req, res) => {
  res.send("one job get");
};

const createJob = async (req, res) => {
  res.send("createJob");
};
const deleteJob = async (req, res) => {
  res.send("deleteJob");
};
const updateJob = async (req, res) => {
  res.send("updateJob");
};

module.exports = { getAllJobs, getJob, createJob, deleteJob, updateJob };
