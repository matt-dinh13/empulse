---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-280 (CBL-1071) Improvement of CBL-58 Functionality"
domain: "Requirements Model"
element_id: 1290948
diagrams: 1
connections: 11
tags:
  - requirement
  - requirements-model
---

# 📋 CBL-1071 Improvement of CBL-58 Functionality: System supports on-line sending of SMS and email without DWH

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-280 (CBL-1071) Improvement of CBL-58 Functionality

## 📝 Notes

The implementation of CBL-58, having been deployed within Sprint 13, did not meet requestor needs. To be able to use CBL-58 properly we identified several points which must be done/implemented. 

*Update of Current Configuration*
1. SMS will be sent continously within the whole day (24/7), not just within defined time frame (from 8 to 16). 
2. SMS will be sent in Bahasa, not in English as know. (We already provided functional team with both language versions. However we will attach them to this CBL as well.) Below is the mapping:

a. MSG_PAYMENT_PAIRED_DPD
Yth <title> <clientName>, trm ksh atas pbyrn Rp<paymentAmount> kontrak <contractNumber>, sisa <remainingInstallment> angs lg.Angs yg msh tertunda Rp<remainingDebt> mhn byr hr ini.HomeCredit02129539600

b. MSG_PAYMENT_PAIRED_DPD_0_PREPAYMENT
Yth <title> <clientName>, tlh diterima pbyrn Rp<paymentAmount> kntrk <contractNumber>, sisa <remainingInstallment> lg. Angs brktnya Rp<remainingDebt> mhn byr pd <nextDueDate>.Trm ksh.HomeCredit02129539600

c. MSG_PAYMENT_PAIRED_DPD_0_NO_PREPAYMENT
Yth <title> <clientName>, tlh diterima pbyrn Rp<paymentAmount> kntrk <contractNumber>, angs blm dibyr penuh.Mhn byr Rp<remainingDebt> utk mnghndri denda ktrlmbtan.HomeCredit02129539600 

d. MSG_PAYMENT_PAIRED
Yth <title> <clientName>, kami informasikan kontrak Anda no <contractNumber> telah lunas.Terima kasih atas kepercayaan Anda kepada kami. HomeCredit 02129539600

PS. For template MSG_PAYMENT_PAIRED, at first this is set for contract with remaining debt = 0, but this SMS template should be sent to all contracts with remaining debt <= IDR 50.000. This request will be country specific since ID have smallunderpayment regulation.
PPS.
<title> --> "Bpk" if customer is Male, and "Ibu" if customer is Female
Format of amount --> Rpx.xxx.xxx
Format of due date --> dd-mmm-yy

*Current Functionality Extension*
1. SMS priority will be set by country and by SMS type. 
It means that every SMS type (incoming payment, outgoing payment, ...) will have its own priority setting (criticial, high, medium, low). This setting will be set independently for several countries. 

2. Update of Payment with DPD > 0 functionality. 
a) Expected Message/Functionality
Dear MR xxx, thank you for received payment of IDR 484,800 for contract 3700187559, 1 remaining installment. IDR 459,800 still overdue – pay today. Thank you, HomeCredit 02129539600
b) Current Implementation
Dear MR xxx, thank you for received payment of IDR 484,800 for contract 3700187559, 2 remaining installment. IDR 384,800 still overdue – pay today. Thank you, HomeCredit 02129539600
I think this difference is caused because of fact that BSL considers penalty as an separate installment and it only takes the “overdue amount” from the next due installment. For more information please see the attached file.

3. There will be new creation of communication list record of every SMS sent. Below is the code for communication list:
Channel: Outgoing SMS (SMS)
Type: General Inquiries (GINQ)
Subtype: Others (GI_OTHERS)
Status: Delivered (DL)
Result: Closed (CLS)
	
*Code Refactoring*
We should revise the current configuration setting. Hardcoded configuration vs database setting. However this task is mostly technical.

## 🔗 Connections (9)

- ← Generalization: [[REQ#5 - System sends SMS notification message of template MSG_PAYMENT_PAIRED_DPD_0_PREPAYMENT]]
- ← Generalization: [[REQ#6 - System sends SMS notification message of template MSG_PAYMENT_PAIRED_DPD]]
- ← Generalization: [[REQ#4 - System send SMS notification message of template MSG_PAYMENT_PAIRED_DPD_0_NO_PREPAYMENT]]
- ← Generalization: [[REQ#3 - System sends SMS notification message of template MSG_PAYMENT_PAIRED to all contracts with r]]
- ← Generalization: [[REQ#8 - System considers only STANDARD installments when sending SMS notification message for 'Updat]]
- ← Generalization: [[REQ#7 - System supports setting of SMS priority and by SMS type for each country]]
- ← Generalization: [[REQ#1 - System supports definition of SMS notification messages]]
- ← Generalization: [[REQ#9 - System creates record of communication event when SMS is sent where Channel_ Outgoing SMS (S]]
- ← Generalization: [[REQ#2 - System notifies clients about accepted payment immediately by sending SMS message anytime wi]]

## 📊 Appears In (1 diagrams)

- Custom: IS-280 (CBL-1071) Improvement of CBL-58 Functionality
