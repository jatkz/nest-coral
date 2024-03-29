import { CronJob } from "cron";
import { WithId } from "mongodb";

export interface CronTask {
  /** Name of the cron */
  name: string;
  /** Cron Expression */
  cron: string;
  /** Http url to request */
  url: string;
}

export type TaskDocument = WithId<CronTask>;

export interface ActiveCronTask extends TaskDocument {
  active: CronJob | undefined;
}