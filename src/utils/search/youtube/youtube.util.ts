import { youtube } from "@googleapis/youtube";
import { env } from "../../env/env.util";
import type { Result } from "arcscord";
import { anyToError, BaseError, error } from "arcscord";
import { ok } from "arcscord";

const client = youtube({
  version: "v3",
  auth: env.GOOGLE_API_KEY,
});

export const youtubeSearch = async(term: string): Promise<Result<string[], BaseError>> => {
  try {

    const request = await client.search.list({
      channelId: "UC5HDIVwuqoIuKKw-WbQ4CvA",
      maxResults: 5,
      part: ["snippet"],
      q: term,
      type: ["video"],
    });
    const list = request.data.items || [];
    return ok(list.map((l) => "https://www.youtube.com/watch?v=" + l.id?.videoId));
  } catch (e) {
    return error(new BaseError({
      message: "failed to request youtube error",
      baseError: anyToError(e),
    }));
  }
};