---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19416 (CSI-2295) Cancellation Functionality of Joint Lending VAS"
domain: "Requirements Model"
element_id: 1743958
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-2366 Changes in the Cancel Insurance function due to refunding fee

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19416 (CSI-2295) Cancellation Functionality of Joint Lending VAS

## 📝 Notes

Get VAS fee for processing
If Insurance Service.Refund On Manual Termination -> REFUND_ON_CANCELLATION ---|| NO_REFUND
recalculate Financial Parameters: 
- If PrincipalPremium is not NULL and is greater than 0
-- NFP.Net Credit Amount = FP.Net Credit Amount -- it stay the same
-- NFP.ProvidedCreditAmount = FP.Provided Credit Amount -- no change, VAS fee is already included
-- NFP.Annuity = calculate a new annuity by Annuity calculation with parameters -- it can calculate again, but it will be the same
-- NFP.TotalMonthlyPayment = FP.TotalMonthlyPaymentAnnuity  -- stay the same
NFP will have FP Item of VAS fee removed

Creation of refunding payment for the client with amount = VAS fee (next parameters: payment type, payment channel, date)

Example of a contract with the JL Health care insurance:
SELECT c.CONTRACT_CODE, c.STATUS, c.SIGNED_DATE, f.CASH_PAYMENT_AMOUNT, f.DOWN_PAYMENT_AMOUNT, 
f.NET_CREDIT_AMOUNT, f.PROVIDED_CREDIT_AMOUNT, f.TERMS, f.ANNUITY_AMOUNT, f.total_mon_payment_amount,
fi.ITEM_AMOUNT, fi.ITEM_TYPE, tit.code, tit.CHARGING_PERIODICITY, tit.USAGE_TYPE FROM ho.bsl_contract c 
JOIN ho.BSL_FINANCIAL_PARAMETERS f ON c.id = f.CONTRACT_ID
LEFT JOIN ho.BSL_FINANCIAL_PARAMETERS_ITEM fi ON f.ID=fi.FINANCIAL_PARAMETERS_ID
JOIN ho.BSL_FIN_PAR_ITEM2TARIF_ITEM f2t ON fi.ID = f2t.ID
JOIN ho.BSL_TARIFF_ITEM ti ON ti.ID = f2t.TARIFF_ITEM_ID
JOIN ho.BSL_TARIFF_ITEM_TYPE tit ON ti.TARIFF_ITEM_TYPE_CODE = tit.CODE
WHERE c.CONTRACT_CODE = '4200093615' and f.archived = 0;

SELECT * FROM ho.BSL_INSURANCE_CONTRACT ic 
WHERE ic.SERVICE_CODE = 'INS_PA_JL'
AND ic.STATUS IN ('N', 'A');

-- paid = 223616

there are a few open points:

	
- To what account (payment channel) will be insurance disbursed? To the already existing DI channel or to a completely new payment channel? 
	
- What will be the outgoing payment type? Currently, if the OP is disbursed to the client's accounts, we are using mostly CL type, but in this case, it does not really make much sense from the business point of view, so I would propose creating a new one.

## 📊 Appears In (1 diagrams)

- Custom: CBL-19416 (CSI-2295) Cancellation Functionality of Joint Lending VAS
