export declare class EligibilityService {
    check365DayEligibility(patientId: string): Promise<{
        eligible: boolean;
        reason: string | null;
        nextDueDate: Date;
        lastCheckupDate: Date | undefined;
    }>;
}
//# sourceMappingURL=service.d.ts.map