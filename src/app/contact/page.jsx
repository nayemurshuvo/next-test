const contact = () => {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-primary">
          Hi, can you please share your address?
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-secondary">
          And the contact number?
        </div>
      </div>

      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-info">
          yes, Mirpur 10, Dhaka 1212
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-success">019999999999</div>
      </div>
    </div>
  );
};

export default contact;
