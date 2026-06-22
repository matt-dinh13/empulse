---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)"
domain: "Analysis Model"
element_id: 1611958
diagrams: 16
connections: 49
tags:
  - interface
  - analysis-model
---

# 🔶 AccountManagementWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)

## 🔗 Connections (49)

- → Dependency: [[GenerateStatementRequest]]
- → Dependency: [[GetAccountItemsRequest (Class 1575825)]]
- → Dependency: [[GetAccountBalanceRequest]]
- → Dependency: [[ActivateAccountResponse]]
- → Dependency: [[GetBillingPeriodRequest]]
- → Dependency: [[ContractUpdateNotificationResponse]]
- → Dependency: [[CreditLimitChangeRequest]]
- → Dependency: [[GetAccountBillingPeriodBalancesResponse]]
- → Dependency: [[GetAccountHistoryResponse]]
- → Dependency: [[CancelTerminationResponse]]
- → Dependency: [[GetAccountResponse (Class 1575821)]]
- → Dependency: [[GetAccountBalanceByCuidRequest]]
- → Dependency: [[GenerateStatementResponse]]
- → Dependency: [[TerminateResponse]]
- → Dependency: [[GetBlockingReasonsRequest]]
- → Dependency: [[GetAccountRequest (Class 1575805)]]
- → Dependency: [[GetBlockingReasonsResponse]]
- → Dependency: [[GetAccountBillingPeriodBalancesRequest (Class 1575837)]]
- → Dependency: [[RepaymentSimulationResponse]]
- → Dependency: [[GetPossibleBlockingReasonsRequest]]
- → Dependency: [[BlockAccountResponse]]
- → Dependency: [[BlockAccountRequest]]
- → Dependency: [[GetAccountBalanceResponse]]
- → Dependency: [[CancelAccountResponse (Class 1575840)]]
- → Dependency: [[CreateAccountResponse (Class 1575822)]]
- → Dependency: [[TerminateSimulationRequest]]
- → Dependency: [[CreateAccountRequest (Class 1575845)]]
- → Dependency: [[CancelAccountRequest (Class 1575832)]]
- → Dependency: [[UnblockAccountRequest]]
- → Dependency: [[GetAccountListRequest (Class 1575830)]]
- → Dependency: [[GetAuthorizationsResponse]]
- → Dependency: [[TerminateRequest]]
- → Dependency: [[DoPayoffRequest]]
- → Dependency: [[CancelTerminationRequest]]
- → Dependency: [[TerminateSimulationResponse]]
- → Dependency: [[GetAccountBalanceByCuidResponse]]
- → Dependency: [[GetAccountListResponse (Class 1575815)]]
- → Dependency: [[ContractUpdateNotificationRequest]]
- → Dependency: [[ActivateAccountRequest]]
- → Dependency: [[GetAccountHistoryRequest]]
- → Dependency: [[GetAuthorizationsRequest]]
- → Dependency: [[GetPossibleBlockingReasonsResponse]]
- → Dependency: [[RepaymentSimulationRequest]]
- → Dependency: [[DoPayoffResponse]]
- → Dependency: [[UnblockAccountResponse]]
- → Dependency: [[GetAccountItemsResponse (Class 1575834)]]
- → Dependency: [[GetBillingPeriodsResponse]]
- ← Dependency «invoke»: [[Creation of contract cancellation request - automatic cancel]]
- ← Dependency «invoke»: [[Creation of contract cancellation request - manual cancel]]

## 📊 Appears In (16 diagrams)

- Logical: Account Management - Activate account
- Logical: Account Management - Product Catalogue update
- Logical: Account ManagementWS - Account items
- Logical: Account ManagementWS - Account termination
- Logical: AccountManagementWS - Account blocking
- Logical: AccountManagementWS - Authorization
- Logical: AccountManagementWS - Contract cancellation
- Logical: AccountManagementWS - Contract payoff
- Logical: AccountManagementWS - Contract signing
- Logical: AccountManagementWS - Credit limit change request
- Logical: AccountManagementWS - GetAccount
- Logical: AccountManagementWS - GetAccountBalance
- Logical: AccountManagementWS - GetAccountList
- Logical: AccountManagementWS - Print last statement
- Logical: AccountManagementWS - Service overview
- Logical: AccountManagementWS - Terminate account
