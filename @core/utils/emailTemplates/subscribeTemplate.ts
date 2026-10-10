
export const subscribeTemplate = (email: string) => {
  return `
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial, sans-serif">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:20px">
<tr>
<td align="center">

<!-- MAIN CONTAINER -->
<table width="680" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb">

<!-- HEADER -->
<tr>
<td style="background:#000000;padding:20px 25px">

  <table width="100%">
    <tr>
      <td align="left">
        <img
          src="/AdAired_Logo.svg" 
          alt="Adaired"
          style="height:32px"
        />
      </td>

      <td align="right" style="color:#cfe3ff;font-size:12px">
        ${new Date().toLocaleString()}
      </td>
    </tr>
  </table>

</td>
</tr>

<!-- BODY -->
<tr>
<td style="padding:40px 30px">

  <h2
    style="
      margin:0 0 16px;
      color:#111827;
      font-size:24px;
      font-weight:700;
    "
  >
    🎉 Thank You for Subscribing!
  </h2>

  <p
    style="
      margin:0 0 16px;
      color:#4b5563;
      font-size:15px;
      line-height:1.7;
    "
  >
    We're excited to have you as part of the Adaired community.
  </p>

  <p
    style="
      margin:0 0 20px;
      color:#4b5563;
      font-size:15px;
      line-height:1.7;
    "
  >
    You subscribed using:
  </p>

  <div
    style="
      background:#f5f7fa;
      border:1px solid #e5e7eb;
      border-radius:6px;
      padding:14px 18px;
      margin-bottom:24px;
      color:#111827;
      font-weight:600;
    "
  >
    ${email}
  </div>

  <p
    style="
      margin:0;
      color:#4b5563;
      font-size:15px;
      line-height:1.7;
    "
  >
    You'll receive:
  </p>

  <ul
    style="
      color:#4b5563;
      font-size:15px;
      line-height:1.8;
      padding-left:20px;
      margin-top:10px;
    "
  >
    <li>Digital marketing insights</li>
    <li>Industry trends & updates</li>
    <li>SEO & PPC strategies</li>
    <li>Business growth tips</li>
    <li>Latest Adaired news</li>
  </ul>

  <p
    style="
      margin-top:24px;
      color:#4b5563;
      font-size:15px;
      line-height:1.7;
    "
  >
    Thank you for your interest in Adaired Digital Media.
  </p>

</td>
</tr>

<!-- FOOTER -->
<tr>
<td
style="
  background:#f9fafb;
  padding:15px;
  text-align:center;
  font-size:12px;
  color:#6b7280;
">
  © ${new Date().getFullYear()} Adaired Digital Media
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
`;
};
