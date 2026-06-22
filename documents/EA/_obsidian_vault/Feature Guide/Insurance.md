---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Feature Guide/CLM"
domain: "Feature Guide"
element_id: 1505174
diagrams: 1
connections: 0
tags:
  - package
  - feature-guide
---

# 📁 Insurance

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Feature Guide/CLM

## 📝 Notes

Insurance functionality covers following domains:

- Insurance Program - it contains definition of insurance as is dealt with insurance company (insurer): i.e. basic data of insurance, information about beneficiary, some limitation of insurance usage, definition of additionally collected data

- Insurance Contract - main domain presenting agreement between insurer and customer (policyholder, insured). It records insurance period, premium, sum insured, operation status of the insurance (REL only)

- Insurance Service auxiliary entity - it holds definition of insurance start, insurance length, premium calculation (i.e. relation to Tariff)

## Insurance Program functionality
- User interface for setting insurance program features, eligible person data and ineligible professions of policyholder, eligible commodities, definition of additional custom data collected within insurance origination
- Function for validation of eligible person data and ineligible professions of policyholder, eligible commodities
- Getting basic info about Insurance Porgram
- Getting custom data definitions

## Insurance Contract functionality
- Insurance switch on/off (insurance period started/finished)
- Automatic insurance prolongation (next insurance period is started automatically when the current period finished)
- Getting basic info about Insurance Contract

## Insurance usage in the system
Insurance can be used
- together with loan contract (general/life insurance, goods insurance), one or more insurance contracts (and various insurance companies) on one loan contract can be used. 
- standalone (without loan)

Notice: Insurance Service has to be defined for both usage

## Insurance origination
Insurance can be originated in the moment of loan contract origination. For REL contracts, it is possible to add an insurance based on billing period (EoM) within the loan lifecycle. 

Start of insurance (insurance period beginning) can be triggered by:

- on loan contract signature or activation (after confirmation that client is disbursed in case of cash loans) - CEL/REL contracts
- on the initial/first transaction made by client (after confirmation that client is disbursed in case of cash loans) - REL only
- on End of billing period (i.e. based on notification from Account Management module) - REL only

Length of insurance (i.e. insurance period) can be driven by:

- CEL contracts: the same as length of loan, fix length (e.g. one year, number of days, number of terms)
- REL contracts: defined period (monthly, annually, billing period, number of days)


Insurance premium can be calculated based on:

- CEL contracts: loan amount, goods price. Premium can increase credit amount, or can be defined as monthly fee in the installment schedule
- REL contracts: credit limit amount, account balance (the current debt on the account)

## Insurance prolongation
Insurance can be prolonged by next period (REL contracts only). Way of prolongation is defined in the Insurance Service. There are checked all needed eligibility (client, contract) if the prolongation is possible.

## Insurance finishing
Insurance is finished automatically either by the end of insurance period, or with full loan repayment, or some conditions are broken (e.g. client is in default with the loan, due to client's age).
Next, the insurance can be cancelled, or terminated manually - see description below

Insurance cancellation can be done as follow:

- CEL contracts: for contracts in statuses New, Signed, Active. Cancellation means that insurance never exists for the contract and it is performed to the beginning of the loan.
Insurance payment is cancelled as well (Outgoing Payments of types: Payment_Type = 'INS', and 'INR').

- REL contracts: for contracts in statuses New, Signed, Active. Cancellation means that insurance never exists for the contract and it is performed to the beginning of the loan. System cancels all transactions with Account Transaction.Type="IIS" or "INS" in status="Confirmed" or "Authorized" or "Sent to Authorization" or "Sent to Confirmation". Insurance payment is cancelled as well

Insurance termination can be done as follow:

- CEL contract: in each moment of the loan, either cancellation of whole insurance, or termination at defined moment of the loan (recalculation of loan financial parameters is done)
- REL contract: standard termination of running insurance period is not allowed for REL contracts, but it can be controlled by automatic prolongation of the insurance (switch on/switch off prolongation of the insurance for next period)

## Insurance billing with insurance company:

- Payment for insurance company (companies) is generated. Revenue part (for HC) can be defined

- File for insurance company (registry file) defined and generated in DWH

## 📊 Appears In (1 diagrams)

- Package: CLM
