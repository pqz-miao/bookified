import { Document, model, Schema, models, Types } from "mongoose";

interface VoiceSession extends Document {
    _id: Types.ObjectId;
    clerkId: string;
    bookId: Types.ObjectId;
    startedAt: Date;
    endedAt?: Date;
    durationSeconds: number;
    billingPeriodStart: Date;
    createdAt: Date;
    updatedAt: Date;
}

const VoiceSessionSchema = new Schema<VoiceSession>({
    clerkId: { type: String, required: true, index: true },
    bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    startedAt: { type: Date, required: true, default: Date.now },
    endedAt: { type: Date },
    durationSeconds: { type: Number, default: 0, required: true },
    billingPeriodStart: { type: Date, required: true, index:  true },
}, { timestamps: true });

VoiceSessionSchema.index({ clerkId: 1, billingPeriodStart: 1 });

export const VoiceSession = models.VoiceSession || model<VoiceSession>('VoiceSession', VoiceSessionSchema);
