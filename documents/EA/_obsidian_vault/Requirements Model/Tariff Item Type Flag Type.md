---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5010 (PH) New Limit Value Base Type and Limit Value for POS Tariff"
domain: "Requirements Model"
element_id: 1867085
diagrams: 3
connections: 3
tags:
  - enumeration
  - requirements-model
---

# 📝 Tariff Item Type Flag Type

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5010 (PH) New Limit Value Base Type and Limit Value for POS Tariff

## 🔗 Connections (3)

- ← Dependency: [[TariffItemTypeCodeListItemDto]]
- → Usage: [[REQ#2 - Create a new tariff item type flag and attach it to the new tariff item type TITF_MONTHLY_FE]]
- ← Dependency: [[Tariff Item Type Flag]]

## 📊 Appears In (3 diagrams)

- Custom: PCG-5010 New Limit Value Base Type and Limit Value for POS Tariff
- Logical: Tariff and Tariff Item Management
- Logical: Tariff Item Type

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Can be cancelled manually (CAN_CANCEL_MANUALLY) |  |  |
| Use current tariff version (USE_CURR_TARIFF_VERSION) |  |  |
| Add to Principal (TO_PRINCIPAL) |  |  |
| Add to Available Amount (TO_AVAILABLE_AMOUNT) |  |  |
| Credit Direction (CREDIT_DIRECTION) |  |  |
| Available for CEL products (FOR_CEL) |  |  |
| Available for REL products (FOR_REL) |  |  |
| Collection Service Fee (COLL_SERVICE_FEE) |  |  |
| Include in PIR calculation (PIR_INCLUDED) |  |  |
| Decrease Loan Amount (DECREASE_LOAN_AMOUNT) |  |  |
| Available for SAI products (FOR_SAI) |  |  |
| Send in calculate customer offer (SEND_IN_CALCULATE_CUST_OFFER) |  |  |
| Included in limit in active status (INCL_IN_LIMIT_ACTIVE) |  |  |
| Include in limit in cancelled status (INCL_IN_LIMIT_CANCELLED) |  |  |
| Calculate with daily interest rate (CALCULATE_DAILY_RATE) |  |  |
| Split to remaining installments (SPLIT_TO_REMAINING_INST) |  |  |
| Split By EMI Limit (SPLIT_BY_EMI_LIMIT) |  |  |
| Moving the end date of contract (MOVE_CONTRACT_END_DATE) |  |  |
| Print Installment schedule after charge (PRINT_IS_AFTER_CHARGE) |  |  |
| Waive in Cooling Off Period processing (WAIVE_IN_COP) |  |  |
| Charge conditionally (CHARGE_CONDITIONALLY) |  |  |
| Condition for charging (CONDITION_FOR_CHARGING) |  |  |
| Ignore charge date (IGNORE_CHARGE_DATE) |  |  |
| {ADD PCG-5010} Limit equals input (LIMIT_EQUALS_INPUT) |  |  |
