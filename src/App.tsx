import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { DashboardProvider } from './context/DashboardContext';
import { ItemsProvider } from './context/ItemsContext';
import { LibraryProvider } from './context/LibraryContext';
import { ChatProvider } from './context/ChatContext';
import { ChatbotProvider } from './context/ChatbotContext';
import { ReportsProvider } from './context/ReportsContext';
import { TransactionsProvider } from './context/TransactionsContext';
import { EducationProvider } from './context/EducationContext';
import { DeferredSalesProvider } from './context/DeferredSalesContext';

import { AppLayout } from './components/layout/AppLayout';

import { DashboardPage } from './pages/DashboardPage';
import { ItemsPage } from './pages/ItemsPage';
import { ChatbotPage } from './pages/ChatbotPage';
import { ReportsPage } from './pages/ReportsPage';
import { TransactionsPage } from './pages/TransactionsPage';
import { EducationPage } from './pages/EducationPage';
import { ModuleDetailPage } from './pages/ModuleDetailPage';
import { FinancialSuitePage } from './pages/FinancialSuitePage';
import { CustomReportsPage } from './pages/CustomReportsPage';
import { CustomReportBuilderPage } from './pages/CustomReportBuilderPage';
import { DeferredSalesPage } from './pages/DeferredSalesPage';
import { InvoiceTransactionDetailPage } from './pages/InvoiceTransactionDetailPage';
import { FullCycleTransactionPage } from './pages/FullCycleTransactionPage';
import { MigrationStatusPage } from './pages/MigrationStatusPage';
import { StandardReportsPage } from './pages/StandardReportsPage';
import { ReportPage } from './pages/ReportPage';
import { CustomBuilderPage } from './pages/CustomBuilderPage';
import { BenchmarkingPage } from './pages/BenchmarkingPage';
import { TemplateGalleryPage } from './pages/TemplateGalleryPage';
import { ScheduledExportsPage } from './pages/ScheduledExportsPage';
import { ExternalDataPage } from './pages/ExternalDataPage';
import { IntegrationSettingsPage } from './pages/IntegrationSettingsPage';
import { IngredientTrackingPage } from './pages/IngredientTrackingPage';
import { ForecastingPage } from './pages/ForecastingPage';
import { AdvancedAnalyticsPage } from './pages/AdvancedAnalyticsPage';
import { ProcurementPage } from './pages/ProcurementPage';
import { BillPayPage } from './pages/BillPayPage';
import { ProfitabilityAnalyticsPage } from './pages/ProfitabilityAnalyticsPage';
import { CashFlowIntelligencePage } from './pages/CashFlowIntelligencePage';

function App() {
  return (
    <DashboardProvider>
      <ItemsProvider>
        <LibraryProvider>
          <ChatProvider>
            <ChatbotProvider>
              <ReportsProvider>
                <TransactionsProvider>
                  <EducationProvider>
                    <DeferredSalesProvider>
                      <Router>
                        <Routes>
                          <Route path="/" element={<AppLayout />}>
                            <Route index element={<DashboardPage />} />
                            <Route path="chatbot" element={<ChatbotPage />} />
                            <Route path="reports" element={<ReportsPage />} />
                            <Route path="transactions" element={<TransactionsPage />} />
                            <Route path="education" element={<EducationPage />} />
                            <Route path="education/:moduleId" element={<ModuleDetailPage />} />

                            <Route path="financial-suite" element={<FinancialSuitePage />} />
                            <Route path="financial-suite/standard-reports" element={<StandardReportsPage />} />
                            <Route path="financial-suite/custom-reports" element={<CustomReportsPage />} />
                            <Route path="financial-suite/custom-reports/create" element={<CustomBuilderPage />} />
                            <Route path="financial-suite/custom-reports/builder" element={<CustomReportBuilderPage />} />
                            <Route path="financial-suite/custom-reports/view/:id" element={<ReportPage />} />
                            <Route path="financial-suite/custom-reports/edit/:id" element={<CustomReportBuilderPage />} />
                            <Route path="financial-suite/templates" element={<TemplateGalleryPage />} />
                            <Route path="financial-suite/benchmarking" element={<BenchmarkingPage />} />
                            <Route path="financial-suite/scheduled-exports" element={<ScheduledExportsPage />} />
                            <Route path="financial-suite/external-data" element={<ExternalDataPage />} />
                            <Route path="financial-suite/integration-settings" element={<IntegrationSettingsPage />} />
                            <Route path="financial-suite/ingredient-tracking" element={<IngredientTrackingPage />} />
                            <Route path="financial-suite/forecasting" element={<ForecastingPage />} />
                            <Route path="financial-suite/advanced-analytics" element={<AdvancedAnalyticsPage />} />
                            <Route path="financial-suite/procurement" element={<ProcurementPage />} />
                            <Route path="financial-suite/bill-pay" element={<BillPayPage />} />
                            <Route path="financial-suite/profitability-analytics" element={<ProfitabilityAnalyticsPage />} />
                            <Route path="financial-suite/cash-flow-intelligence" element={<CashFlowIntelligencePage />} />
                            <Route path="financial-suite/reports/sales-summary-v3" element={<ReportsPage />} />
                            <Route path="financial-suite/reports/reconciliation-v3" element={<ReportsPage />} />
                            <Route path="financial-suite/reports/:reportId" element={<ReportPage />} />

                            <Route path="deferred-sales" element={<DeferredSalesPage />} />
                            <Route path="deferred-sales/transactions" element={<TransactionsPage />} />
                            <Route path="deferred-sales/invoice-detail" element={<InvoiceTransactionDetailPage />} />
                            <Route path="deferred-sales/full-cycle" element={<FullCycleTransactionPage />} />

                            <Route path="migration-status" element={<MigrationStatusPage />} />

                            {/* FS Prototype Routes */}
                            <Route path="fs-prototype" element={<FinancialSuitePage />} />
                            <Route path="fs-prototype/deferred-sales" element={<DeferredSalesPage />} />
                            <Route path="fs-prototype/custom-reports" element={<CustomReportsPage />} />
                            <Route path="fs-prototype/reports/:reportType" element={<ReportsPage />} />
                          </Route>
                        </Routes>
                      </Router>
                    </DeferredSalesProvider>
                  </EducationProvider>
                </TransactionsProvider>
              </ReportsProvider>
            </ChatbotProvider>
          </ChatProvider>
        </LibraryProvider>
      </ItemsProvider>
    </DashboardProvider>
  );
}

export default App;
