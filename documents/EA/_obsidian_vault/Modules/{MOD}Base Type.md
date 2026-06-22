---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/Tariff Calculation/Business Rules"
domain: "Modules"
element_id: 1869553
diagrams: 11
connections: 22
tags:
  - enumeration
  - modules
---

# 📝 {MOD}Base Type

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/Tariff Calculation/Business Rules

## 📝 Notes

This entity defines the base types for fee/commission/subvention calculation and their getting (e.g. annuity, goods price, principal).

Calculation of the value uses different approaches based on what is the context:

	
- Calculation for a contract - source is in contract financial parameters (FP) if exist else in offer financial parameters (OFP) if exist
	
- Calculation for an offer

Note: If any of the values needed for calculation is not available, calculation fails.

Allowed base types for setting of particular attributes are defined by Allowed Base Type Usage.

## 🔗 Connections (20)

- ← Dependency: [[Min Instalment Base]]
- ← Dependency: [[{MOD}ServiceParametersMTCACC]]
- ← Dependency: [[Percentage based on]]
- ← Dependency: [[{MOD}MTCACC]]
- ← Dependency: [[{MOD}Subvention (Class 1858806)]]
- ← Dependency: [[Financing Package Subvention]]
- ← Dependency: [[Limit amount based on (GUIElement 1867017)]]
- ← Dependency: [[Percentage based on (GUIElement 1866995)]]
- ← Dependency: [[Limit number based on (GUIElement 1866990)]]
- ← Dependency: [[{MOD}Tariff Item]]
- ← Dependency: [[{MOD}Tariff Item]]
- ← Dependency: [[{MOD}Tariff Item]]
- ← Dependency: [[{MOD}Tariff Item]]
- ← Dependency: [[{MOD}Partial Early Repayment Service]]
- ← Association: [[Allowed Base Type Usage]]
- → Realisation: [[LOR-1565 - Create Contract2Commodity and update services related to commodity]]
- ← Dependency: [[{MOD}ServiceParametersDto - validation]]
- ← Dependency: [[{ADD} Calculate tariff item amount]]
- ← Dependency: [[{MOD}Algorithm_ Calculate tariff item amount]]
- ← Dependency: [[Revolving Loan Product Variant]]

## 📊 Appears In (11 diagrams)

- Custom: Business Rules
- Custom: Business Rules
- Custom: PCG-5511 CBL-29642 BRPH-2099 - Create New Service Type: Interest Back
- Custom: PCG-5517 CBL-29642 BRPH-2099 - Create New Service Type: Interest Back
- Custom: Validation Rules
- Logical: Base Types
- Logical: MTCACC
- Logical: MTCACC Data
- Logical: Partial early repayment setting
- Logical: Subventions
- Logical: Tariff and Tariff Item Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| FP (Future principal) |  |  |
| SGP (Service goods price) |  |  |
| SI (Sum insured) |  |  |
| NSI (Next sum insured) |  |  |
| SP (Simple principal) |  |  |
| TN (Number of terms) |  |  |
| A (Annuity) |  |  |
| DA (Delinquent amount) |  |  |
| DAP (Delinquent amount capitalization) |  |  |
| GP (Goods price) |  |  |
| NLA (Net loan amount) |  |  |
| OI (Outstanding installments) |  |  |
| OP (Outstanding principal) |  |  |
| WP (Whole principal) |  |  |
| TA (Transaction amount) |  |  |
| NCL (Net credit limit) |  |  |
| PCL (Provided credit limit) |  |  |
| OD (Card Outstanding debt) |  |  |
| NTB (Number of transactions per billing period) |  |  |
| UD (Unprescribed Debt) |  |  |
| GPS (Goods price subsidized) |  |  |
| EDB (Explicitly defined base) |  |  |
| OF (Own funds) |  |  |
| NSDT (Number of subsequent debit transactions) |  |  |
| ODEI (Outstanding debt excluding initial transaction) |  |  |
| WPI (Whole Principal without Insurance) |  |  |
| EDLN (Explicitly defined base for limit number) |  |  |
| EDLA (Explicitly defined base for limit amount) |  |  |
| RSI (REL Sum Insured) |  |  |
| LIDA (Latest Installment Delinquency Amount) |  |  |
| NCOF (Net Credit Amount with One Time Fee) |  |  |
| NOP (Not yet due or due outstanding principal) |  |  |
| POP (Past due outstanding principal) |  |  |
| TAD_BP (Total Amount Past Due in EOB) |  |  |
| PAY_SUM (Sum of Incoming Payments in Billing Period) |  |  |
| PRINC_SUM (Sum of Debit Principals on the Account for a Previous Billing Period) |  |  |
| DTA (Daily volume amount for given transaction type) |  |  |
| BPTA (Volume per billing period for given transaction type) |  |  |
| DNT (Number of transactions in same day for given transaction type) |  |  |
| BPNT (Number of transactions per billing period for given transaction type) |  |  |
| PLA (Provided loan amount) |  |  |
| STI (Service fees) |  |  |
| NP (Net principal) |  |  |
| SUBP (Subsidized principal) |  |  |
| INSN (Installment number) |  |  |
| TOD (Total Outstanding Debt) |  |  |
| FA (Financed Amount) |  |  |
| BPTATC (Tired Volume per billing period) |  |  |
| OPA (Outstanding principal and additional tariff item types) |  |  |
| EDBP (Explicit Defined Base Principal) |  |  |
| EDBI (Explicit Defined Base Interest) |  |  |
| AOP(All Outstanding Principal) |  |  |
| CP (Cash Principal) |  |  |
| DI (Deferred Interest) |  |  |
| PUR (Purpose) |  |  |
| PSP (Proportional Simple Principal) |  |  |
| CNP (Commodity Net Principal) |  |  |
| DM (Disbursement Method) |  |  |
| BP (Basic Principal) |  |  |
| {ADD}FINS (First Installment) |  |  |
| {ADD}INTA(Interest amount) |  |  |
| {ADD}RG (Risk Grade) |  |  |
| {ADD}PCAT (Pricing Category) |  |  |
| {ADD}IPINS (Interest of Previous Installment) |  |  |
