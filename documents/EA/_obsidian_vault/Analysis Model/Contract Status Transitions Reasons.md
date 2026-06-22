---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application cancellation configuration/Logical Data Model"
domain: "Analysis Model"
element_id: 1880198
diagrams: 4
connections: 11
tags:
  - enumeration
  - analysis-model
---

# 📝 Contract Status Transitions Reasons

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application cancellation configuration/Logical Data Model

## 📝 Notes

List of reasons for contract status change. For each value of the list is set its purpose (for which target state can be used) and who can use it (system, or user).

Notice: The enumeration does not contain all codes used in the application. There are presented only values which needs some functions of the system (Role Type = 'SYSTEM'), possibly also values used by both system or user (Role Type = 'USER') here.

Values used only by user are not presented here and every country can define cancellation reasons by itself.
The attribute Used Deal Type determinates for which kind of entity with specific attributes (i.e. REL / CEL contract or REL transactions) can be the particular reason used.

## 🔗 Connections (11)

- ← Dependency: [[Reason for cancellation]]
- ← Dependency: [[Pay-off Date Calculation Parameter]]
- ← Dependency: [[Application Cancellation Configuration]]
- ← Dependency: [[Cancellation reason (GUIElement 1590865)]]
- ← Dependency: [[Reason for cancellation (GUIElement 1616073)]]
- ← Dependency: [[Reason (GUIElement 1701751)]]
- ← Dependency: [[Reason (GUIElement 1730353)]]
- ← Dependency: [[Early Repayment Request]]
- ← Dependency: [[Contract Status Transition (Class 1879574)]]
- → Dependency: [[Used Deal Type]]
- → Dependency: [[Contract Status Type (Class 1880196)]]

## 📊 Appears In (4 diagrams)

- Logical: Application Cancellation Configuration
- Logical: Contract - Status
- Logical: Early repayment request
- Logical: Pay-off installment date 

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Text |  |
| Value | Text |  |
| LONG_INACTIVITY |  |  |
| LAP_TIMEOUT |  |  |
| CIF_TIMEOUT |  |  |
| Role_Type | Text |  |
| OFFER_REJECT |  |  |
| OFFER_INVALIDATE |  |  |
| Contract Transition Type | Contract Status Type |  |
| LAP_CANCEL |  |  |
| REPAID |  |  |
| REACTIVATED |  |  |
| GRACE_PERIOD |  |  |
| GIFT_PAYMENT |  |  |
| CONDITIONS_REJECTED |  |  |
| FRAUD |  |  |
| DEATH |  |  |
| OVERDUE |  |  |
| WRITE_OFF |  |  |
| WRITE_OFF_PROP |  |  |
| Used Deal Type | Used Deal Type |  |
| CABUS_TIMEOUT |  |  |
| CONTRACT_NOT_SIGNED |  |  |
| OPTIONAL_OFFER_NOT_TAKEN |  |  |
| PRODUCT_NOT_SELECTED |  |  |
| XSELL_NOT_TAKEN |  |  |
| APPLICATION_NOT_FINISHED |  |  |
| UNUSED_OFFER |  |  |
| CONTRACT_SALE |  |  |
| CUID_INCONSISTENCY |  |  |
| WRITE_OFF_DELINQUENCY |  |  |
| WRITE_OFF_DEATH |  |  |
| WRITE_OFF_OTHER |  |  |
| WRITE_OFF_SECURITY |  |  |
| WRITE_OFF_UNCONTACTABLE |  |  |
| LAP_CANCEL_MANUAL |  |  |
| LAP_ANOTHER_CREDIT |  |  |
| LAP_CHANGE_DOWN_PAYMENT |  |  |
| LAP_CHANGE_PRODUCT |  |  |
| LAP_CLIENT_DOESNT_AGREE |  |  |
| LAP_COMMODITY_CHANGE |  |  |
| LAP_COMMODITY_NOT_IN_POS |  |  |
| LAP_COMPLAINING |  |  |
| LAP_DOWN_PAYMENT |  |  |
| LAP_HIGH_INTEREST |  |  |
| LAP_INSTALLMENT |  |  |
| LAP_INTEREST_RATE |  |  |
| LAP_INTERNAL_CODE |  |  |
| LAP_INVALID_GOODS_COMBINATION |  |  |
| LAP_NO_MORE_INTEREST |  |  |
| LAP_OTHER |  |  |
| LAP_RISK_REASON |  |  |
| LAP_SA_RA_REQUEST |  |  |
| LAP_WRONG_INFORMATION |  |  |
| CONSOLIDATION_APPLIED |  |  |
| CONSOLIDATION_CANCELLED |  |  |
| LAP_NO_CREDO_VERIF |  |  |
| LAP_BLAZE_IDC_DIFFBIRTHD |  |  |
| LAP_BLAZE_IDC_DIFFCLNAME |  |  |
| LAP_BLAZE_IDC_DIFFIIN |  |  |
| LAP_BLAZE_IDC_DIFFNUMBER |  |  |
| LAP_BLAZE_IDCPHOTOABSENSE |  |  |
| LAP_BLAZE_PCH_BADQUALITY |  |  |
| LAP_BLAZE_PEN_DIFFCLNAME |  |  |
| LAP_BLAZE_PHOTOABSENSE |  |  |
| LAP_BLAZE_CARDEXISTS |  |  |
| LAP_BLAZE_A1NULL |  |  |
