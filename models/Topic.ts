// NOTE: This class contains all internal types of Topic

// This is for Year, Subject, etc.
export interface InternalObject {
    id: number;
    name: string;
}

export interface Lesson {
    id: number;
    name: string;
    subjects: InternalObject[];
    years: InternalObject[];
}

export interface Unit {
    name: string;
    lessons: Lesson[];
}

export interface Topic {
    name: string;
    units: Unit[];
}
