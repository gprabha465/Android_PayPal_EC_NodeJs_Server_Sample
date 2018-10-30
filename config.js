var config = {
	"IS_APPLICATION_IN_SANDBOX" : true,

	"sandbox" : {
		"CLIENT_ID" :"AefIl3S1sdMOE42nAJLantGyrIa28AKXssQsydOmKDWfWR_LfnaMSi23vGHS6kFoy1cGge50-5A0J3gY",
		"SECRET":"EG6rYSD8xcJQ3lYmAapxcPmHb2nxFqGarzYTXdc7SmtU8oRom6MBPgRPY5ET3XeqGf8DBgri5VrRIGQW",
		"ACCESS_TOKEN_URL":"https://api.sandbox.paypal.com/v1/oauth2/token",
		"CREATE_PAYMENT_URL":"https://api.sandbox.paypal.com/v1/payments/payment",
		"EXECUTE_PAYMENT_URL":"https://api.sandbox.paypal.com/v1/payments/payment/{payment_id}/execute/",
		"GET_PAYMENT_DETAILS":"https://api.sandbox.paypal.com/v1/payments/payment/{payment_id}",
		"CANCEL_URL":"https://node-paypal-express-sever.herokuapp.com/cancel-url",
		"RETURN_URL":"https://node-paypal-express-sever.herokuapp.com/execute-payments",
		//"RETURN_URL":"com.example.paypalcustomtabdemo://onetouch/v1/success",
		"BN_CODE":"PP-DemoPortal-EC-JSV4-python-REST"
	},

	"live" : {
		"CLIENT_ID" :"AYBymkGzvoY4j4GlCAFt3B3lDZ0v9DPqPgLzQ-qLFDvInFseYLfY2jkDBR83V6audEq8uUHGYYPTufdV",
		"SECRET":"EIGA-3CbWmvV5mNZQGBkbJXARbnErhE08OnbbSdq_d3WzL1_SeYwK54KQrCdMBg2yYLLpeCFy4yNUUgW",
		"ACCESS_TOKEN_URL":"https://api.sandbox.paypal.com/v1/oauth2/token",
		"CREATE_PAYMENT_URL":"https://api.sandbox.paypal.com/v1/payments/payment",
		"EXECUTE_PAYMENT_URL":"https://api.sandbox.paypal.com/v1/payments/payment/{payment_id}/execute/",
		"GET_PAYMENT_DETAILS":"https://api.sandbox.paypal.com/v1/payments/payment/{payment_id}",
		"CANCEL_URL":"cancel-url",
		"RETURN_URL":"cancel-url",
		"BN_CODE":"PP-DemoPortal-EC-JSV4-python-REST"
	}
}

exports.getConfig = function() {
	console.log(config.IS_APPLICATION_IN_SANDBOX)
	if(config.IS_APPLICATION_IN_SANDBOX)
		return config.sandbox
	else
		return config.live
}


