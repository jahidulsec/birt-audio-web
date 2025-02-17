import Link from "next/link";
import React from "react";

export default function TermsPage() {
  return (
    <div className="h-svh flex flex-col gap-5 container mx-auto py-6">
      <h1 className="font-Semibold text-2xl">Terms of Service</h1>

      <p>
        The Terms and Conditions of Use outline the agreement between the User
        and BEST of ROME TOUR with registered office in Via Borgo Vittorio 38,
        fiscal code and number of registration No. 17223631007, governing the
        use of the BIRT mobile application and the Best in Rome Tour website. By
        accessing and using the App and Website, the User agrees to these Terms
        and the Privacy Notice on the Best in Rome Tour website
        <Link href={"https://bestinrometours.com/"}>
          {" "}
          (www.bestinrometours.com)
        </Link>
        .
      </p>
      <p>
        The website allows users to purchase mobile travel guides for a selected
        city, either individually or combined with public transportation
        tickets. Third parties, such as physical retailers, online retailers,
        and travel booking websites, may sell the Content. Best in Rome Tour
        cannot be responsible for any obligations arising from these
        transactions. Users are subject to their terms and conditions.
      </p>
      <h2>1. The limited license</h2>
      <p>
        Best in Rome Tour grants a limited license to access the Website and
        BIRT App, subject to Terms and Conditions and Privacy Notice. Access may
        include third-party fees, and users are responsible for personal,
        non-commercial use, not allowing others to use their accounts.
      </p>
      <h2>2. The BIRT App</h2>
      <p>
        Best in Rome Tour offers the BIRT App for iOS and Android mobile
        devices, available for free download through the Apple or Android App
        Store. The app is compatible with iOS devices from version 4.1 and
        Android devices from version 8. To use the website and app, users must
        have a supported web browser. Best in Rome Tour may modify or terminate
        the app at any time without notice, and may not allow access after one
        year after downloading from the App Store.
      </p>
      <h2>3. Languages</h2>
      <p>
        The Digital Content is available in one place only upon purchase and can
        be modified or terminated at any time without prior consent. Users can
        download the content once in the selected language. They can cancel the
        content from their app and re-download it in a different language on the
        same device.
      </p>
      <h2>4. Eligibility</h2>
      <p>
        Purchases on the Website and App require users to be 18 or older, and
        they must have the necessary rights and capacity to use the App in
        compliance with applicable laws. The information submitted must be
        truthful and accurate, and access to the App may be terminated without
        prior notice if untrue, inaccurate, not current, or incomplete. Users
        are responsible for maintaining confidentiality of their information,
        including passwords, and Best in Rome Tour cannot be held liable for
        damages resulting from the App&apos;s use. The App is not suitable for
        children without adult supervision, and Best in Rome Tour cannot be held
        responsible for breaching this provision.
      </p>
      <h2>5. Intellectual property</h2>
      <p>
        Best in Rome Tour owns the digital content and information on its App
        and Website, including communications, disclaimers, data, and other
        materials. The platform and its services are proprietary and subject to
        intellectual copyrights. Users are prohibited from modifying,
        distributing, decrypting, performing, copying, reproducing,
        transferring, transmitting, or reselling any information, software,
        products, or services obtained through the App and Website. The App and
        Website may display content provided by third parties, which may be
        protected by copyright, trademark, or other laws. These terms do not
        grant users rights to use or permanent disposal of such content.
      </p>
      <h2>6. Warranties</h2>
      <p>
        Best in Rome Tour provides services and features through its App and
        website, which are used with the scope permitted by valid legislation
        and at the user&apos;s own risk. The App is provided on an &quot;as is,
        as available&quot; basis and Best in Rome Tour does not grant warranties
        on the digital content, its effects on users, or its interpretation or
        use. The company is not responsible for the accuracy, copyright
        compliance, legality, or decency of the material provided or accessed
        through its Service, App, and Website. Best in Rome Tour does not
        guarantee the BIRT software&apos;s accuracy, operation, or compatibility
        with any device, software, applications, and services. The App may use
        third-party data for transport information and recommendations, and all
        travel and transport times are estimates, based on external factors. The
        company cannot be held responsible for the terms, validity, and user
        conditions of the transport company, and travel tickets are subject to
        the terms, validity, and user conditions.
      </p>
      <p>
        Best in Rome Tour&apos;s App is not suitable for use in situations where
        content, data, or information may result in danger, death, injury, or
        serious health detriment. The App does not represent or warrant that
        moving in such destinations is advisable or without risk. The App may
        contain advertisements and links to external websites operated by
        parties other than Best in Rome Tour, and Best in Rome Tour is not
        responsible for their contents, availability, or accuracy. The App is
        not responsible for any loss suffered or alleged to be suffered in
        connection with the use of or reliance upon such content, advertising,
        products, services, or other resources made available by such external
        websites. All content is the sole responsibility of the person who
        originated it, and Best in Rome Tour does not guarantee the authenticity
        of any content or data provided through the App.
      </p>
      <h2>7. Liability Limitations</h2>
      <p>
        Best in Rome Tour is not liable for any damages arising from the use of
        the Service, Website, or App. Users release Best in Rome Tour from any
        liability related to their conduct in connection with the Service. The
        App may cause distractions or dangerous situations, and users are
        responsible for their safe movement in public spaces, walking, driving,
        cycling, and using public transportation. Best in Rome Tour ensures that
        all descriptions of products and services on the Website and App are
        up-to-date, but cannot be held responsible for incorrect information
        related to digital content. The App is not liable for unavailability of
        pedestrian sidewalks, absence of hindrances, public transport line
        suspensions, route changes, traffic deviations, or other inaccuracies.
        Users should not use the App if specific circumstances do not permit
        safe use.
      </p>
      <h2>8. Governing Law and exclusive jurisdiction</h2>
      <p>
        This Agreement is governed by Italian legislation and applicable law,
        with disputes regarding interpretation, validity, or performance
        assigned to the exclusive jurisdiction of the Court of Milano.
      </p>
      <h2>9. Termination</h2>
      <p>
        Best in Rome Tour reserves the right to terminate the Service at any
        time, for any reason, without prior notice, and to modify these Terms
        and Conditions at any time.
      </p>
      <h2>10. Contact information</h2>
      <h2>
        To express any comments or questions regarding the Terms and Conditions
        of Use, please email <h2>contact@bestinrometour.com</h2>
      </h2>
    </div>
  );
}
