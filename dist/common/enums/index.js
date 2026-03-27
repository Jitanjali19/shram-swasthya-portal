"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryChannel = exports.FileType = exports.ReportStatus = exports.AssignmentRole = exports.MemberRole = exports.QuestionnaireTierCode = exports.AttendanceStatus = exports.EligibilityStatus = exports.CampCategoryScope = exports.CampStatus = exports.PatientRegistrationStatus = exports.VendorStatus = exports.UserStatus = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["SUPER_ADMIN"] = "SUPER_ADMIN";
    UserRole["ADMIN"] = "ADMIN";
    UserRole["VENDOR"] = "VENDOR";
    UserRole["FIELD_STAFF"] = "FIELD_STAFF";
    UserRole["DOCTOR"] = "DOCTOR";
    UserRole["LABOR"] = "LABOR";
    UserRole["PATIENT"] = "PATIENT";
})(UserRole || (exports.UserRole = UserRole = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["PENDING"] = "PENDING";
    UserStatus["ACTIVE"] = "ACTIVE";
    UserStatus["REJECTED"] = "REJECTED";
    UserStatus["SUSPENDED"] = "SUSPENDED";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
var VendorStatus;
(function (VendorStatus) {
    VendorStatus["PENDING"] = "PENDING";
    VendorStatus["APPROVED"] = "APPROVED";
    VendorStatus["REJECTED"] = "REJECTED";
})(VendorStatus || (exports.VendorStatus = VendorStatus = {}));
var PatientRegistrationStatus;
(function (PatientRegistrationStatus) {
    PatientRegistrationStatus["PENDING"] = "PENDING";
    PatientRegistrationStatus["APPROVED"] = "APPROVED";
    PatientRegistrationStatus["REJECTED"] = "REJECTED";
})(PatientRegistrationStatus || (exports.PatientRegistrationStatus = PatientRegistrationStatus = {}));
var CampStatus;
(function (CampStatus) {
    CampStatus["DRAFT"] = "DRAFT";
    CampStatus["UPCOMING"] = "UPCOMING";
    CampStatus["ACTIVE"] = "ACTIVE";
    CampStatus["COMPLETED"] = "COMPLETED";
    CampStatus["CANCELLED"] = "CANCELLED";
})(CampStatus || (exports.CampStatus = CampStatus = {}));
var CampCategoryScope;
(function (CampCategoryScope) {
    CampCategoryScope["RURAL"] = "RURAL";
    CampCategoryScope["MID_REGION"] = "MID_REGION";
    CampCategoryScope["METRO"] = "METRO";
})(CampCategoryScope || (exports.CampCategoryScope = CampCategoryScope = {}));
var EligibilityStatus;
(function (EligibilityStatus) {
    EligibilityStatus["ELIGIBLE"] = "ELIGIBLE";
    EligibilityStatus["INELIGIBLE"] = "INELIGIBLE";
})(EligibilityStatus || (exports.EligibilityStatus = EligibilityStatus = {}));
var AttendanceStatus;
(function (AttendanceStatus) {
    AttendanceStatus["PRESENT"] = "PRESENT";
    AttendanceStatus["ABSENT"] = "ABSENT";
    AttendanceStatus["CANCELLED"] = "CANCELLED";
})(AttendanceStatus || (exports.AttendanceStatus = AttendanceStatus = {}));
var QuestionnaireTierCode;
(function (QuestionnaireTierCode) {
    QuestionnaireTierCode["TIER_0"] = "TIER_0";
    QuestionnaireTierCode["TIER_1"] = "TIER_1";
    QuestionnaireTierCode["TIER_2"] = "TIER_2";
})(QuestionnaireTierCode || (exports.QuestionnaireTierCode = QuestionnaireTierCode = {}));
var MemberRole;
(function (MemberRole) {
    MemberRole["FIELD_STAFF"] = "FIELD_STAFF";
    MemberRole["DOCTOR"] = "DOCTOR";
})(MemberRole || (exports.MemberRole = MemberRole = {}));
var AssignmentRole;
(function (AssignmentRole) {
    AssignmentRole["FIELD_STAFF"] = "FIELD_STAFF";
    AssignmentRole["DOCTOR"] = "DOCTOR";
})(AssignmentRole || (exports.AssignmentRole = AssignmentRole = {}));
var ReportStatus;
(function (ReportStatus) {
    ReportStatus["DRAFT"] = "DRAFT";
    ReportStatus["SUBMITTED"] = "SUBMITTED";
    ReportStatus["FINALIZED"] = "FINALIZED";
})(ReportStatus || (exports.ReportStatus = ReportStatus = {}));
var FileType;
(function (FileType) {
    FileType["PDF"] = "PDF";
    FileType["EXCEL"] = "EXCEL";
    FileType["IMAGE"] = "IMAGE";
})(FileType || (exports.FileType = FileType = {}));
var DeliveryChannel;
(function (DeliveryChannel) {
    DeliveryChannel["SMS"] = "SMS";
    DeliveryChannel["EMAIL"] = "EMAIL";
    DeliveryChannel["IN_APP"] = "IN_APP";
})(DeliveryChannel || (exports.DeliveryChannel = DeliveryChannel = {}));
//# sourceMappingURL=index.js.map