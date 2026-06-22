---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-22675 (CLM-5768) BNPL Supplement with Commodity data for Loan Purpose"
domain: "Requirements Model"
element_id: 1878828
diagrams: 4
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Set Transaction Supplement values

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-22675 (CLM-5768) BNPL Supplement with Commodity data for Loan Purpose

## 📝 Notes

Extension of Contract Supplement for Transaction Supplement

Input:

	
- requestSource = the request.sourceSystem [sourceSystem; sourceRequestId]
	
- applicationCode = the request.applicationCode
	
- AD.data (application data from ADS)
	
- {ADD CSI-3705} SQD.data (SalesQuote data from SQS) {/ADD}



Stored values in Contract Transaction Supplement extension:

	
- Request Source = requestSource
	
- Application Code = applicationCode
	
- Custom Data[] = AD.data.additionalData[]; mapping Custom Data.Code = additionalData.key and Custom Data.Value = additionalData.value
	
- Custom Data[] = AD.parties [where code = SALES_AGENT {ADD CSI-3705} or 'SELLER' (there could be more sellers){/ADD}  ]; mapping Custom Data.Code = parties.code and Custom Data.Value = parties.role
	
- {ADD CLM-6131}Custom Data[] = AD.commodities; mapping all items under Custom Data.Code = "commodityId" and Custom Data.Value = AD.commodities.code value {/ADD}
	
- {ADD CSI-3705}
Custom Data[] = Custom Data.Code='cashPayment', Custom Data.Value=SQD.amountArrangements,cashPayment
	
- Custom Data[] = Custom Data.Code='discountAmount', Custom Data.Value=SQD.amountArrangements,discountAmount
	
- Custom Data[] = Custom Data.Code='voucherCode', Custom Data.Value=SQD.specifications.value where SQD.specifications.key='VOUCHER_CODE'
{/ADD}

## 🔗 Connections (1)

- ← Dependency: [[Create contract supplement rule (Requirement 1879308)]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-22675 (CLM-5768) BNPL Supplement with Commodity data for Loan Purpose
- Custom: CBL-26143 (CSI-3705) BNPL - Enrich transaction data
- Use Case: CSI-1740 - Update method for TransactionSupplement creation
- Use Case: Transaction Supplement request creation - Use case model
