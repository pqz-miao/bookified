import { Document, model, Schema, models, Types } from "mongoose";

interface BookSegment extends Document {
    clerkId: string;
    bookId: Types.ObjectId;
    content: string;
    segmentIndex: number;
    pageNumber?: number;
    wordCount: number;
    createdAt: Date;
    updatedAt: Date;
}

const BookSegmentSchema = new Schema<BookSegment>({
    clerkId: { type: String, required: true },
    bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true, index: true },
    content: { type: String, required: true },
    segmentIndex: { type: Number, required: true, index: true },
    pageNumber: { type: Number, index: true, },
    wordCount: { type: Number, required: true },
}, { timestamps: true });

BookSegmentSchema.index({ bookId: 1, segmentIndex: 1 }, { unique: true });
BookSegmentSchema.index({ bookId: 1, pageNumber: 1 });

BookSegmentSchema.index({ bookId: 1, content: 'text' });

export const BookSegment = models.BookSegment || model<BookSegment>('BookSegment', BookSegmentSchema);
