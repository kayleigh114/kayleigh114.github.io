#!/usr/bin/env ruby

client = Twitter::REST::Client.new do |config|
  config.consumer_key = "ygWg6iFqf545ocAvW4tSTQ0Ft"
  config.consumer_secret = "CU73lrIImuORkhWuo31nvvh8bTmeFb5xeVBDJBUDuL0Hmfshff"
  config.access_token = "935388800-zRgFROAKngnfmticpselusNFwjQ3L5w7UO1mhWB6"
  config.access_token_secret = "IxHK86XkEMvUTAUexVDg3QyyYgSzF7CA7ZEbyf5BCDoDl"
end

client.update('Tweet from the command line!')
