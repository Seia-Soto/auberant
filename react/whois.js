const whois = require('whois-api')
exports.run = (client, message, args) => {
  if (!args[0]) {
    message.channel.send({embed: {
      color: 3447003,
      title: 'whois',
      description: `Query domain registeration information from ICANN WHOIS. Argument is domain name.`
    }})
  } else {
    whois.rawLookup(args[0], (error, result) => {
      var resultEdit = result.replace('TERMS OF USE: You are not authorized to access or query our Whois
      database through the use of electronic processes that are high-volume and
      automated except as reasonably necessary to register domain names or
      modify existing registrations; the Data in VeriSign Global Registry
      Services (VeriSign) Whois database is provided by VeriSign for
      information purposes only, and to assist persons in obtaining information
      about or related to a domain name registration record. VeriSign does not
      guarantee its accuracy. By submitting a Whois query, you agree to abide
      by the following terms of use: You agree that you may use this Data only
      for lawful purposes and that under no circumstances will you use this Data
      to: (1) allow, enable, or otherwise support the transmission of mass
      unsolicited, commercial advertising or solicitations via e-mail, telephone,
      or facsimile; or (2) enable high volume, automated, electronic processes
      that apply to VeriSign (or its computer systems). The compilation,
      repackaging, dissemination or other use of this Data is expressly
      prohibited without the prior written consent of VeriSign. You agree not to
      use electronic processes that are automated and high-volume to access or
      query the Whois database except as reasonably necessary to register
      domain names or modify existing registrations. VeriSign reserves the right
      to restrict your access to the Whois database in its sole discretion to ensure
      operational stability.  VeriSign may restrict or terminate your access to the
      Whois database for failure to abide by these terms of use. VeriSign
      reserves the right to modify these terms at any time.

      The Registry database contains ONLY .COM, .NET, .EDU domains and
      Registrars.', '')
      console.log(result)
    })
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'whois',
  description: 'Query domain registeration information from ICANN WHOIS.',
  usage: 'whois'
}
