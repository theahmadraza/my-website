import React from "react";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import profile from '../../extra/images/profile.JPG'


const Whatsapp = () => {
	return (
     
		<WhatsAppWidget
			phoneNo="+923130004271"
			position="right"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={true}
			autoOpenTimer={5000}
			messageBox={true}
			messageBoxTxt="Hi Team,a is there any related service available ?"
			iconSize="60"
			iconColor="white"
			iconBgColor="#25D366"
			headerIcon={profile}
			headerIconColor="pink"
			headerTxtColor="black"
			headerBgColor="#25D366"
			headerTitle="Muhammad Ahmad"
			headerCaption="Online"
			bodyBgColor="#bbb"
			chatPersonName="Ahmad"
			chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
			footerBgColor="#999"
			btnBgColor="#25D366"
			btnTxtColor="black"
		/>
	);
};

export default Whatsapp;