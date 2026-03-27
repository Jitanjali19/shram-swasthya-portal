"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const middleware_1 = require("./common/middleware");
const routes_1 = __importDefault(require("./modules/auth/routes"));
const routes_2 = __importDefault(require("./modules/super-admin/routes"));
const routes_3 = __importDefault(require("./modules/patients/routes"));
const routes_4 = __importDefault(require("./modules/eligibility/routes"));
const routes_5 = __importDefault(require("./modules/audit-logs/routes"));
const routes_6 = __importDefault(require("./modules/users/routes"));
const app = (0, express_1.default)();
// Security middleware
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
}));
// Rate limiting
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);
// Body parsing
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true }));
// Routes
app.get('/', (req, res) => {
    res.send('API is runninggggg bro');
});
app.use('/api/auth', routes_1.default);
app.use('/api/users', routes_6.default);
app.use('/api/super-admin', routes_2.default);
app.use('/api/patients', routes_3.default);
app.use('/api/eligibility', routes_4.default);
app.use('/api/audit-logs', routes_5.default);
// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});
app.use(middleware_1.notFound);
// Error handling
app.use(middleware_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map