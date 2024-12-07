
const LOCAL_STORAGE_KEY = 'KEEP_WATCHING';

export interface IKeepWatching {
  classId: string;
  courseId: string;
  className: string;
  courseName: string;
}

export const LocalStorage = {
  keepWatching: {
    get: (): IKeepWatching | null => {
      try {
        const result = window.localStorage.getItem(LOCAL_STORAGE_KEY);
        if (result) {
          return JSON.parse(result);
        }

        return null;
      } catch (error) {
        return null;
      }
    },
    set: (data: IKeepWatching) => {
      try {
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
      } catch (error) {
        return;
      }
    },
  },
};
