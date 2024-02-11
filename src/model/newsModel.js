const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    read_time: {
      type: Number,
      required: true,
    },
    created_at: {
      type: Date,
      default: function () {
        const currentDate = new Date();
        currentDate.setUTCHours(currentDate.getUTCHours() + 5);
        return currentDate;
      },
    },
  },
  {
    versionKey: false,
  }
);

const AllNews = mongoose.model("allNews", newsSchema);
module.exports = AllNews;
