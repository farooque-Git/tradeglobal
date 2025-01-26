import React from "react";

export default function PlatformSection() {
  const platforms = [
    {
      name: "Official Terminal for Android",
      downloadLink: "/downloads/android",
      icon: "📱",
    },
    {
      name: "Official Terminal for Desktop",
      downloadLink: "/downloads/desktop",
      icon: "💻",
    },
    {
      name: "Official Terminal for iPhone",
      downloadLink: "/downloads/ios",
      icon: "📱",
    },
  ];

  const features = [
    {
      title: "Reliable",
      description: "Our platform guarantees 99.99% uptime for seamless performance.",
      icon: "✔️",
    },
    {
      title: "Support",
      description: "24/7 customer support to assist with any platform queries.",
      icon: "📞",
    },
    {
      title: "Regulated",
      description: "Fully compliant with industry standards and regulations.",
      icon: "⚖️",
    },
    {
      title: "Secure",
      description: "State-of-the-art encryption for protecting your data.",
      icon: "🔒",
    },
  ];

  // Function to handle download action
  const handleDownload = (platformName, downloadLink) => {
    console.log(`Downloading: ${platformName}`);
    // Perform the download logic (e.g., navigate to downloadLink or fetch a file)
    window.location.href = downloadLink;
  };

  return (
    <div className="bg-gray-50 py-12">
      {/* Platform Section */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8">Platform</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex items-center gap-4"
            >
              <div className="text-3xl">{platform.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{platform.name}</h3>
                <button
                  onClick={() => handleDownload(platform.name, platform.downloadLink)}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Download Here (Free)
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-12 max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8">Why Choose Our Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
