import mongoose from "mongoose";
declare const Run: mongoose.Model<{
    errors: string[];
    runId: string;
    repo: string;
    status: string;
    logs?: string | null;
    aiResponse?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    errors: string[];
    runId: string;
    repo: string;
    status: string;
    logs?: string | null;
    aiResponse?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    errors: string[];
    runId: string;
    repo: string;
    status: string;
    logs?: string | null;
    aiResponse?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    errors: string[];
    runId: string;
    repo: string;
    status: string;
    logs?: string | null;
    aiResponse?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    errors: string[];
    runId: string;
    repo: string;
    status: string;
    logs?: string | null;
    aiResponse?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    errors: string[];
    runId: string;
    repo: string;
    status: string;
    logs?: string | null;
    aiResponse?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    errors: string[];
    runId: string;
    repo: string;
    status: string;
    logs?: string | null;
    aiResponse?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    errors: string[];
    runId: string;
    repo: string;
    status: string;
    logs?: string | null;
    aiResponse?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default Run;
//# sourceMappingURL=Run.d.ts.map