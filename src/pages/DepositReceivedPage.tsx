import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Calendar, Filter, Download } from 'lucide-react';
import { cn } from '../utils/cn';

interface LineItemProps {
  label: string;
  amount: number | null;
  isExpandable?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
  children?: React.ReactNode;
  level?: number;
  hasRedDot?: boolean;
  transactionCount?: string;
  isBoldTotal?: boolean;
}

function LineItem({
  label,
  amount,
  isExpandable = false,
  isExpanded = false,
  onToggle,
  children,
  level = 0,
  hasRedDot = false,
  transactionCount,
  isBoldTotal = false,
}: LineItemProps) {
  const formatAmount = (value: number | null) => {
    if (value === null || value === 0) return '';
    const formatted = Math.abs(value).toFixed(2);
    return value < 0 ? `($${formatted})` : `$${formatted}`;
  };

  return (
    <div>
      <div
        className={cn(
          'flex items-center justify-between py-2.5 transition-colors',
          level > 0 && 'pl-6',
          isBoldTotal && 'border-t-2 border-gray-300 pt-3'
        )}
      >
        <div className="flex items-center gap-2">
          {isExpandable && (
            <button
              className="p-0.5 hover:bg-gray-100 rounded"
              onClick={(e) => {
                e.stopPropagation();
                onToggle?.();
              }}
            >
              {isExpanded ? (
                <ChevronDown className="h-3 w-3 text-gray-400" />
              ) : (
                <ChevronRight className="h-3 w-3 text-gray-400" />
              )}
            </button>
          )}
          {!isExpandable && level === 0 && <div className="w-4" />}
          {!isExpandable && level > 0 && <div className="w-4" />}

          <div className="flex items-center gap-2">
            {hasRedDot && <div className="w-2 h-2 bg-red-500 rounded-full" />}
            <div className="flex flex-col">
              <span
                className={cn(
                  'text-sm',
                  isBoldTotal
                    ? 'font-semibold text-gray-900'
                    : level === 0
                    ? 'font-medium text-gray-900'
                    : 'text-gray-700'
                )}
              >
                {label}
              </span>
              {transactionCount && (
                <span className="text-xs text-gray-500">{transactionCount}</span>
              )}
            </div>
          </div>
        </div>

        <span
          className={cn(
            'text-sm font-medium px-2 py-1',
            amount !== null && amount < 0 ? 'text-red-600' : 'text-gray-900'
          )}
        >
          {formatAmount(amount)}
        </span>
      </div>

      {isExpanded && children && (
        <div className="border-l border-gray-200 ml-3">{children}</div>
      )}
    </div>
  );
}

export function DepositReceivedPage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    grossSales: false,
    deferredSales: true,
    totalPayments: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Deposit Received</h1>
            <p className="text-sm text-gray-500 mt-1">
              Sales summary reflecting a $100 deposit received
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Calendar className="h-4 w-4" />
              Last 30 days
            </button>
            <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="h-4 w-4" />
              Filters
            </button>
            <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="h-4 w-4" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6">
            <div className="divide-y divide-gray-100">
              {/* Gross Sales */}
              <LineItem
                label="Gross sales"
                amount={null}
                isExpandable={true}
                isExpanded={expandedSections.grossSales}
                onToggle={() => toggleSection('grossSales')}
              >
                <LineItem label="Items" amount={null} level={1} />
                <LineItem label="Service charges" amount={null} level={1} />
              </LineItem>

              {/* Returns */}
              <LineItem label="Returns" amount={null} hasRedDot={true} />

              {/* Discounts & comps */}
              <LineItem label="Discounts & comps" amount={null} hasRedDot={true} />

              {/* Net sales */}
              <LineItem label="Net sales" amount={null} hasRedDot={true} />

              {/* Deferred sales */}
              <LineItem
                label="Deferred sales"
                amount={null}
                isExpandable={true}
                isExpanded={expandedSections.deferredSales}
                onToggle={() => toggleSection('deferredSales')}
                hasRedDot={true}
              >
                <LineItem label="Gift card sales" amount={null} level={1} />
                <LineItem label="Partial payments" amount={100.0} level={1} />
                <LineItem label="Deposits redeemed" amount={null} level={1} />
              </LineItem>

              {/* Taxes */}
              <LineItem label="Taxes" amount={null} hasRedDot={true} />

              {/* Tips */}
              <LineItem label="Tips" amount={null} hasRedDot={true} />

              {/* Refunds by amount */}
              <LineItem label="Refunds by amount" amount={null} />

              {/* Total */}
              <LineItem label="Total" amount={100.0} isBoldTotal={true} />

              {/* Spacer */}
              <div className="pt-4" />

              {/* Total payments collected */}
              <LineItem
                label="Total payments collected"
                amount={100.0}
                isExpandable={true}
                isExpanded={expandedSections.totalPayments}
                onToggle={() => toggleSection('totalPayments')}
              >
                <LineItem label="Card" amount={100.0} level={1} />
                <LineItem label="Cash" amount={null} level={1} />
                <LineItem label="Check" amount={null} level={1} />
                <LineItem label="Gift card redeemed" amount={null} level={1} />
                <LineItem label="House account" amount={null} level={1} />
                <LineItem label="Other" amount={null} level={1} />
              </LineItem>

              {/* Fees */}
              <LineItem label="Fees" amount={null} />

              {/* Net Total */}
              <LineItem label="Net Total" amount={100.0} isBoldTotal={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
