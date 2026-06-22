---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Business rules"
domain: "Modules"
element_id: 1310132
diagrams: 5
connections: 5
tags:
  - requirement
  - modules
---

# 📋 Processing TransactionMessageDto

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Business rules

## 📝 Notes

Input:

	
- TransactionMessageDto


Initialization:

	
- If TransactionMessageDto.diraction = IRRELEVANT, the algorithm ends (no error is logged).


	
- If If TransactionMessageDto.TransactionMessageDto.transactionSourceId -> TransactionSourceIdDto.sourceSystem is not CARD, the system logs an error and the algorithm ends.


	
- System tries to find a record in RELTariffItemToOBSCode where RELTariffItemToOBSCode.Code = TransactionMessageDto.tariffItemTypeCode. 
If:
- record is found, the system sets OBStariffCode = RELTariffItemToOBSCode.value
- no record is found, the system sets OBStariffCode = TransactionMessageDto.tariffItemTypeCode


	
- If does apply that
TansactionMessageDto.direction = DEBIT 
OR TransactionMessageDto.sourceSystem is not in (IB, OBS, BSL)          ...e.g. UFO etc.
OR TransactionMessageDto.billingSystem is not in (HOMER, CABUS)   …e.g. OBS or HOMER_ACC etc.  
the algorithm continues. Otherwise ends (no error is logged).


	
- System tries to find the records in Currency enum:
- Currency[CurrencyTrans] where Code = TransactionMessageDto.originalAmount -> MoneyDto.currency
- Currency[CurrencySett] where Code = TransactionMessageDto.reconciliationAmount -> MoneyDto.currency
- Currency[CurrencyAccount] where Code = TransactionMessageDto.amount -> MoneyDto.currency
If some or the records is found, the system logs an error and the algorithm ends.



Algorithm:
System creates a record in the comm table TRANSHEAD160 with the following parameters:

	
- Id = automatically generated unique identifier of the record


	
- IdCredit = according to the rule Get OBS contract identification, passed is TransactionMessageDto.contractCode


	
- AccountNumber = TransactionMessageDto.accountNumber


	
- Source = according to the TransactionMessageDto.billingSystem:
- BillingSystemType.HOMER_FEE -->ACCOPER
- BillingSystemType.HOMER_TX -->TRANSAC 
- BillingSystemType.CABUS --> CABUS
- BillingSystemType.OBS --> OBS
- BillingSystemType.HOMER --> HOMER
	
- TypeInform = 
- if TransactionMessageDto.cancelled = true, then C (Cancel)
- if  TransactionMessageDto.cancelled = false AND TransactionMessageDto.accountingEntryType = PRINCIPAL_EVENT, then  then T (Transmitted)
- else then I (Insert)


	
- IdTransaction = TransactionMessageDto.transactionSourceId -> TransactionSourceIdDto.sourceTxId
...without the first two characters if it begins with "TX"
	
- sourceTrxID = TransactionMessageDto.sourceEventId->TransactionSourceIdDto.sourceTxId; null if it is not filled
IdOrigTransaction = TransactionMessageDto.parentAccountItemCode
	
- OperationReason = according to the TransactionMessageDto.cancellationReason:
- CancellationReasonDto.REVERSAL --> REVERSAL
- CancellationReasonDto.RECALCULATION --> RECALCULATION 
- CancellationReasonDto.CONTRACT_CANCEL --> CONTRACT_CANCELLATION
- CancellationReasonDto.CHARGEBACK --> CHARGEBACK 
- CancellationReasonDto.TRANSFER_TO_IP --> TRANSFER_TO_IP
- CancellationReasonDto.TRANSFER_BACK_TO_CARD -->  TRANSFER_BACK_TO_CARD 
- CancellationReasonDto.IP_CANCEL --> IP_CANCEL
- CancellationReasonDto.COOLING_OFF --> COOLING_OFF
- else --> null
	
- Direction = according to the TransactionMessageDto.direction:
- TransactionDirection.CREDIT --> C
- TransactionDirection.DEBIT --> D
	
- AmountTrans = TransactionMessageDto.originalAmount -> MoneyDto.amount ...with negative sign if TransactionMessageDto.cancelled = true
	
- CurrencyTrans = Currency[CurrencyTrans].Value of the found record during the Initialization
	
- AmountSett = TransactionMessageDto.reconciliationAmount -> MoneyDto.amount ...with negative sign if TransactionMessageDto.cancelled = true
	
- CurrencySett = Currency[CurrencySett].Value of the found record during the Initialization
	
- AmountAccount = TransactionMessageDto.amount -> MoneyDto.amount ...with negative sign if TransactionMessageDto.cancelled = true
	
- CurrencyAccount = Currency[CurrencyAccount].Value of the found record during the Initialization
	
- ExchangeRateAccount = TransactionMessageDto.conversionRate
	
- BillingDate = TransactionMessageDto.billingDate
	
- TransactionType = OBStariffCode
	
- SellerplaceCode = if a record in RELTariffItemToOBSCode was found and RELTariffItemToOBSCode.type = 'INS' then, then is used value of system property defaultInsuraceCompany; else null
	
- PackCount = according to the TransactionMessageDto.cancelled:
- false --> count of TransactionMessageDto.reconciliationItems
- true --> 0
	
- TargetAccountnumber = null
	
- PaymentSymbols = whole XML as a string from TransactionMessageDto.attributes
	
- Allocation = according to the TransactionMessageDto.allocation:
- AllocationTypeDto.IP --> IP
- AllocationTypeDto.CARD --> CARD


	
- IdResult190 = null
	
- ResultCode = null
	
- TimeStamp = current


and for each TransactionMessageDto.reconciliationItems is called Processing TransactionReconciliationDto algorithm.

## 🔗 Connections (4)

- ← Dependency: [[Processing MessageEnvelopeDto]]
- → Dependency: [[REQ#1 Messages TRANSAC160 and TRANSAC161]]
- → Dependency: [[Processing TransactionReconciliationDto]]
- ← Dependency: [[TransactionMessageDto (Class 1347890)]]

## 📊 Appears In (5 diagrams)

- Custom: Account Transactions - Business rules
- Custom: BRR-2348 - OBS interface - Transactions on contracts (REL)
- Custom: COMMON for comm. with CaBus - Business rules
- Logical: COMMON for comm. with CaBus - Communication Model
- Logical: REL Account Transactions - Communication model
