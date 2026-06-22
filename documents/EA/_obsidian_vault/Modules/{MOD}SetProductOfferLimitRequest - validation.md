---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Product Offer Limits (internal DB)/Use Case"
domain: "Modules"
element_id: 1281330
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {MOD}SetProductOfferLimitRequest - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Product Offer Limits (internal DB)/Use Case

## 📝 Notes

// Check request for setting of product offer limits (see SetProductOfferLimitRequest)
// If an error is detected then corresponding code is returned in result

If request.deactivate = True then
- If request.offerID is not defined then set resultCode = DEACTIVATE_OFFERID_MISSING
- Else return (other validations are ignored)
If request.CUID is not defined then set result = CUID_MISSING.
If request.offerName is not defined then set result = OFFERNAME_MISSING.
If both request.(validFrom, validTo) are defined and request.validFrom > request.validTo then set result = VALIDITY_INVALID.
If request.campaignID is not defined then set result = CAMPAIGNID_MISSING.
If request.productType is defined and does not exist in corresponding code list then set result = PRODTYPE_INVALID.
If request.initialTransactionType is defined and does not exist in corresponding code list then set result = INITTRANSTYPE_INVALID.
Either both or non of (request.productType, request.initialTransactionType) must be defined else result = PRODTYPE_INITTRANSTYPE_INVALID.
If request.commodityType is defined and does not exist in corresponding code list then set result = COMMODITYTYPE_INVALID.
If request.marketingAction is defined and does not exist in corresponding code list then set result = MARKETINGACTION_INVALID.
For each request.product check if exists active version of a product (PV) with corresponding code where PV.ValidTo >= current date or is null. If not then set resultCode = PRODUCTCODE_INVALID.
If request.productType is not defined and no request.product is defined then set result = PRODUCT_MISSING.
If request.pricingCategory is defined and the value is less than 0 then set result = PRICINGCATEGORY_INVALID.
If request.maximalCreditAmount is defined and the value is less than 0 then set resultCode = MAXCREDITAMOUNT_INVALID.
If request.maximalMonthlyPayment is defined and the value is less than 0 then set resultCode = MAXMONTHLYPAYMENT_INVALID.
If request.minimalCashPayment is defined and the value is less than 0 then set resultCode = MINCASHPAYMENT_INVALID.
If currency assigned to some financial amount in request is defined and does not exist in corresponding code list then set result = CURRENCY_INVALID.

## 🔗 Connections (1)

- ← Dependency: [[02.901 Set product offer limits (UseCase 1380766)]]

## 📊 Appears In (1 diagrams)

- Use Case: Management of Product Offer Limits
