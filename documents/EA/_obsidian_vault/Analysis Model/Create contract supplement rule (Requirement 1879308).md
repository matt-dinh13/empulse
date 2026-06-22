---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Business rules"
domain: "Analysis Model"
element_id: 1879308
diagrams: 15
connections: 13
tags:
  - requirement
  - analysis-model
---

# 📋 Create contract supplement rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Business rules

## 📝 Notes

- This rule describes creation of a Contract Supplement object for Credit limit change, Collection tools, Cardless transactions (ALOP/APOS/CASH/POS), Account Renewal, Card Balance Transfer functions, {ADD CSI-4317}{Country VN}Contract service operations{/ADD}.


Input:

	
- Contract


	
- Supplement definition object
	
- Extended attributes (optional)


Output:

	
- created Contract Supplement object


Algorithm:

	
- If Extended attributes.applicationCode is not null, set contractSupplementCode = applicationCode else setcontractSupplementCode = returned value of Generating contract supplement code
	
- System creates a Contract Supplement with following parameters:


	
- Contract = Contract from input
	
- Supplement = reference to Supplement definition
	
- Code = contractSupplementCode


	
- Registration_status = Not ready for registration (NRR)


	
- Status = IN_PROCESS


	
- Created_By = currently logged user
	
- Creation_Date = current
	
- Extended attributes for:
- Credit Limit Change Contract Supplement are set by Set Credit Limit Change Contract Supplement values rule
- Transaction Contract supplement are set by {MOD}Set Transaction Supplement values
- Account Renewal Supplement type are set by {ADD}Set Account Renewal Supplement value
- Card Balance Transfer Supplement type are set by {ADD}Set Card Balance Transfer values
- {ADD CSI-4317}{Country VN}Contract service operations are set by rule Set Contarct ServiceSupplement values{/ADD}


3. For Contract Supplement, system creates Contract Supplement Status Transition 
with following parameters:

	
- Created_By = currently logged user
	
- Creation_Date = current
	
- Status = Contract Supplement.Status


4. System tries to find Cancellation Timeout for defined Contract Supplement status as ContractSupplement->Supplement->Supplement Process Setting where Status Type = Contract Supplement.Status
5. System sets the value of ContractSupplement.CancellationTimeout on:
- null if the appropriate SupplementCancellationSetting has not been found
- ('current date and time' + Supplement Process Setting.CancellationTimeout) otherwise.
6. System creates record in the Contract Supplement Event Outbox for KAFKA streaming based on Contract Supplement.Type and defined event

## 🔗 Connections (13)

- ← Dependency: [[{MOD}08.358 Create request for payment holiday common]]
- ← Dependency: [[{MOD}08.403 Create request for loan restructuring common]]
- ← Dependency: [[{MOD}08.064 Create request for change due date common]]
- ← Dependency: [[13.070 Process Credit limit change request via messaging (UseCase 1877206)]]
- ← Dependency: [[13.060 Create change credit limit request manually (UseCase 1877196)]]
- → Dependency: [[Set Contract Service replacement Supplement values]]
- → Dependency: [[{ADD}Set Card Balance Transafer values]]
- → Dependency: [[{ADD}Set Account Renewal Supplement value]]
- → Dependency: [[{MOD}Set Transaction Supplement values]]
- → Dependency: [[Generating contract supplement code]]
- ← Dependency: [[13.200 Create Account Renewal Supplement]]
- ← Dependency: [[{MOD}13.100 Create Transaction Supplement service]]
- ← Dependency: [[{ADD}13.600 Process contract service replacement request]]

## 📊 Appears In (15 diagrams)

- Custom: Business rules
- Custom: CBL-26143 (CSI-3705) BNPL - Enrich transaction data
- Use Case: Card Balance Transfer request processing - Use Case Model
- Use Case: Change credit limit manually
- Use Case: CHDDR request creation - externally
- Use Case: CHDDR request creation - via GUI
- Use Case: Contract service replacement request processing
- Use Case: Credit Limit Change via messaging - Use Case model
- Use Case: CSI-1740 - Update method for TransactionSupplement creation
- Use Case: Loan restructuring request creation - externally
- Use Case: Loan restructuring request creation - via GUI
- Use Case: Payment holiday request creation - externally
- Use Case: Payment holiday request creation - via GUI
- Use Case: REL Account renewal support - Use Case Model
- Use Case: Transaction Supplement request creation - Use case model
