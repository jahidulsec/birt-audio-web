import { Language } from "./language";
import { Place } from "./places";

export interface Audio {
  id: string;
  filePath: string;
  fileUrl: string;
  imgUrl: string[];
  placeId: string;
  languageId: string;
  adminId?: string;
}

export interface AudioPlaceLang {
    id: string;
    filePath: string;
    fileUrl: string;
    imgUrl: string[];
    place: Place;
    language: Language;
    adminId?: string;
  }
