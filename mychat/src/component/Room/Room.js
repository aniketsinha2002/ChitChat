import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const Room = () => {
  const { roomId } = useParams();

  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = 375169548;
    const serverSecret = "315d5380bcf4ca03ee020c9d10324de3";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "test-demo");
    
    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // start the call
      zp.joinRoom({
              container: element,
              // sharedLinks: [
              //   {
              //     name: 'Personal link',
              //     url:
              //     window.location.protocol + '//' + 
              //     window.location.host + window.location.pathname +
              //       '?roomID=' +
              //       roomId,
              //   },
              // ],
              scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall,
              },
        });
      }
  return (
    <div ref={myMeeting}>
      Room
    </div>
  )
}

export default Room