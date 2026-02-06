import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Search,
  Home,
  Package,
  FileText,
  Globe,
  CreditCard,
  BarChart3,
  Users,
  Building2,
  Settings,
  Grid3X3,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Bell,
  MessageCircle,
  HelpCircle,
  User,
  Activity,
  GraduationCap
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  hasSubmenu?: boolean;
  submenuItems?: SubMenuItem[];
}

interface SubMenuItem {
  id: string;
  label: string;
  hasSubmenu?: boolean;
  submenuItems?: SubMenuItem[];
}

const mainNavItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'invoices', label: 'Invoices & payments', icon: FileText },
  { id: 'online', label: 'Online', icon: Globe },
  { id: 'customers', label: 'Customers', icon: CreditCard },

  // 👇 Add Financial Suite
  {
    id: 'financial-suite',
    label: 'Financial Suite',
    icon: BarChart3,
    hasSubmenu: true,
    submenuItems: [
      { id: 'financial-dashboard', label: '📊 Dashboard' },
      { 
        id: 'reports', 
        label: '📈 Reports',
        hasSubmenu: true,
        submenuItems: [
          { id: 'standard-reports', label: 'Standard Reports' },
          { id: 'custom-reports', label: 'Custom Reports' },
          { id: 'report-builder', label: 'Report Builder' },
          { id: 'templates', label: 'Templates' }
        ]
      },
      { id: 'analytics', label: '📊 Analytics', hasSubmenu: true, submenuItems: [
        { id: 'benchmarking', label: 'Benchmarking' },
        { id: 'advanced-analytics', label: '✨ Advanced Analytics' },
        { id: 'forecasting', label: '✨ Forecasting' },
        { id: 'ingredient-analytics', label: '✨ Ingredient Analytics' },
        { id: 'profitability-analytics', label: '🎯 Profitability Analytics' },
        { id: 'cash-flow-intelligence', label: '💰 Cash Flow Intelligence' }
      ]},
      { 
        id: 'integrations', 
        label: '🔗 Integrations',
        hasSubmenu: true,
        submenuItems: [
          { id: 'integration-settings', label: 'Settings' },
          { id: 'external-data', label: 'External Data' },
          { id: 'data-sources', label: 'Data Sources' },
          { id: 'data-uploads', label: 'Uploads' }
        ]
      },
      { id: 'procurement', label: '📦 Procurement' },
      { id: 'bill-pay', label: '💳 Bill Pay & AP' },
      { 
        id: 'automation', 
        label: '⚙️ Automation',
        hasSubmenu: true,
        submenuItems: [
          { id: 'scheduled-exports', label: 'Scheduled Exports' }
        ]
      }
    ]
  },

  // 👇 Optional FS Prototype section
  {
    id: 'fs-prototype',
    label: 'FS Prototype',
    icon: Activity,
    hasSubmenu: true,
    submenuItems: [
      { id: 'fs-dashboard', label: 'Dashboard' },
      {
        id: 'fs-reports',
        label: 'Reports',
        hasSubmenu: true,
        submenuItems: [
          { id: 'fs-sales-summary', label: 'Sales summary' },
          { id: 'fs-sales-by-location', label: 'Sales by location' },
          { id: 'fs-sales-by-time', label: 'Sales by time' },
          { id: 'fs-sales-by-category', label: 'Sales by category' },
          { id: 'fs-sales-by-item', label: 'Sales by item' },
          { id: 'fs-discounts-comps', label: 'Discounts & comps' },
          { id: 'fs-taxes', label: 'Taxes' },
          { id: 'fs-payments', label: 'Payments' },
          { id: 'fs-cash-drawer', label: 'Cash drawer' },
          { id: 'fs-deposits', label: 'Deposits' },
          { id: 'fs-employee-timecards', label: 'Employee timecards' },
          { id: 'fs-gratuity', label: 'Gratuity' },
          { id: 'fs-items-sold', label: 'Items sold' },
          { id: 'fs-modifier-sold', label: 'Modifier sold' },
          { id: 'fs-customer-directory', label: 'Customer directory' }
        ]
      },
      { id: 'fs-custom-reports', label: 'Custom Reports' },
      {
        id: 'fs-accounting',
        label: 'Accounting',
        hasSubmenu: true,
        submenuItems: [
          { id: 'fs-deposit-received', label: 'Deposit Received' }
        ]
      }
    ]
  },

  { id: 'staff', label: 'Staff', icon: Users },
  { id: 'money', label: 'Money', icon: Building2 },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'add-more', label: 'Add more', icon: Grid3X3 }
];

export function LeftNav() {
  const [currentView, setCurrentView] = useState<string>('main');
  const [expandedSubmenuItems, setExpandedSubmenuItems] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMainItemClick = (item: NavItem) => {
    if (item.hasSubmenu) {
      setCurrentView(item.id);
      if (item.id === 'financial-suite') {
        navigate('/financial-suite');
      } else if (item.id === 'fs-prototype') {
        navigate('/fs-prototype');
      }
    } else {
      if (item.id === 'home') navigate('/');
      if (item.id === 'reports') navigate('/reports');
      if (item.id === 'education') navigate('/education');
    }
  };

  const handleSubmenuItemClick = (subItem: SubMenuItem, parentId: string) => {
    if (subItem.hasSubmenu) {
      toggleSubmenuItem(subItem.id);
    } else {
      // Financial Suite navigation
      if (subItem.id === 'financial-dashboard') navigate('/financial-suite');
      else if (subItem.id === 'standard-reports') navigate('/financial-suite/standard-reports');
      else if (subItem.id === 'custom-reports') navigate('/financial-suite/custom-reports');
      else if (subItem.id === 'report-builder') navigate('/financial-suite/custom-reports/create');
      else if (subItem.id === 'templates') navigate('/financial-suite/templates');
      else if (subItem.id === 'benchmarking') navigate('/financial-suite/benchmarking');
      else if (subItem.id === 'advanced-analytics') navigate('/financial-suite/advanced-analytics');
      else if (subItem.id === 'forecasting') navigate('/financial-suite/forecasting');
      else if (subItem.id === 'ingredient-analytics') navigate('/financial-suite/ingredient-tracking');
      else if (subItem.id === 'profitability-analytics') navigate('/financial-suite/profitability-analytics');
      else if (subItem.id === 'cash-flow-intelligence') navigate('/financial-suite/cash-flow-intelligence');
      else if (subItem.id === 'integration-settings') navigate('/financial-suite/integration-settings');
      else if (subItem.id === 'external-data') navigate('/financial-suite/external-data');
      else if (subItem.id === 'data-sources') navigate('/financial-suite/integration-settings?tab=sources');
      else if (subItem.id === 'data-uploads') navigate('/financial-suite/integration-settings?tab=uploads');
      else if (subItem.id === 'scheduled-exports') navigate('/financial-suite/scheduled-exports');
      else if (subItem.id === 'procurement') navigate('/financial-suite/procurement');
      else if (subItem.id === 'bill-pay') navigate('/financial-suite/bill-pay');
      else if (subItem.id === 'alert-rules') navigate('/financial-suite/integration-settings?tab=alerts');
      
      // FS Prototype navigation
      else if (subItem.id === 'fs-dashboard') navigate('/fs-prototype');
      else if (subItem.id === 'fs-reports') toggleSubmenuItem(subItem.id);
      else if (subItem.id === 'fs-custom-reports') navigate('/fs-prototype/custom-reports');
      else if (subItem.id === 'fs-deposit-received') navigate('/fs-prototype/accounting/deposit-received');
      else if (subItem.id.startsWith('fs-')) {
        const reportType = subItem.id.replace('fs-', '');
        navigate(`/fs-prototype/reports/${reportType}`);
      }
    }
  };

  const handleBackClick = () => setCurrentView('main');

  const toggleSubmenuItem = (itemId: string) => {
    setExpandedSubmenuItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  const currentNavItem = mainNavItems.find((item) => item.id === currentView);

  return (
    <div className="relative w-64 h-screen bg-gray-50 border-r border-gray-200 flex flex-col">
      <div className="p-3 border-b border-gray-200 bg-gray-50">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="flex-1 overflow-hidden relative">
        <div
          className={cn(
            'absolute inset-0 transition-transform duration-300 ease-in-out',
            currentView !== 'main' ? '-translate-x-full' : 'translate-x-0'
          )}
        >
          <div className="py-2 h-full overflow-y-auto">
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              let isActive = false;
              if (item.id === 'home') isActive = location.pathname === '/';
              else if (item.id === 'reports') isActive = location.pathname.startsWith('/reports');
              else if (item.id === 'education') isActive = location.pathname.startsWith('/education');
              else if (item.id === 'financial-suite')
                isActive = location.pathname.startsWith('/financial-suite');
              else if (item.id === 'fs-prototype') isActive = location.pathname.startsWith('/fs-prototype');

              return (
                <button
                  key={item.id}
                  onClick={() => handleMainItemClick(item)}
                  className={cn(
                    'w-full flex items-center space-x-3 px-4 py-2.5 text-left transition-colors font-normal',
                    isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-200'
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {currentNavItem?.hasSubmenu && (
          <div
            className={cn(
              'absolute inset-0 transition-transform duration-300 ease-in-out bg-gray-50',
              currentView === currentNavItem.id ? 'translate-x-0' : 'translate-x-full'
            )}
          >
            <div className="h-full overflow-y-auto">
              <div className="p-3 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center space-x-3">
                  <button onClick={handleBackClick} className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  <h2 className="font-medium text-gray-900">{currentNavItem.label}</h2>
                </div>
              </div>

              <div className="py-2">
                {currentNavItem.submenuItems?.map((subItem) => (
                  <div key={subItem.id}>
                    <button
                      onClick={() => handleSubmenuItemClick(subItem, currentNavItem.id)}
                      className={cn(
                        'w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors font-normal',
                        (subItem.id === 'sales-summary' && location.pathname.includes('sales-summary'))
                          ? 'text-blue-600 bg-blue-100'
                          : 'text-gray-700 hover:bg-gray-100'
                      )}
                    >
                      <span>{subItem.label}</span>
                      {subItem.hasSubmenu &&
                        (expandedSubmenuItems.includes(subItem.id) ? (
                          <ChevronUp className="h-4 w-4 text-gray-400" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-gray-400" />
                        ))}
                    </button>

                    {subItem.hasSubmenu && expandedSubmenuItems.includes(subItem.id) && (
                      <div className="bg-gray-100">
                        {subItem.submenuItems?.map((nestedItem) => (
                          <button
                            key={nestedItem.id}
                            onClick={() => handleSubmenuItemClick(nestedItem, subItem.id)}
                            className={cn(
                              'w-full flex items-center px-8 py-2 text-left transition-colors font-normal text-sm',
                              nestedItem.id === 'sales-summary' && location.pathname.includes('sales-summary')
                                ? 'text-blue-600 bg-blue-100'
                                : 'text-gray-700 hover:bg-gray-200'
                            )}
                          >
                            <span>{nestedItem.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 bg-gray-50">
        <div className="flex justify-center space-x-6 py-3">
          <button className="relative p-2 hover:bg-gray-100 rounded transition-colors">
            <Bell className="h-4 w-4 text-gray-600" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              1
            </span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <MessageCircle className="h-4 w-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <HelpCircle className="h-4 w-4 text-gray-600" />
          </button>
        </div>

        <div className="p-3 border-t border-gray-200">
          <button className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-100 rounded transition-colors">
            <div className="flex items-center space-x-3">
              <User className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-normal text-gray-900">Divya's FS Demo</span>
            </div>
            <ChevronLeft className="h-4 w-4 text-gray-400 rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
}
