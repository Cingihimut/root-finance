import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "./ui/button";
import Image from "next/image";

function ButtonClaim() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Pastikan komponen siap digunakan
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    onClick={openConnectModal}
                    type="button"
                    className="lg:p-6 lg:text-xl"
                  >
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button
                    onClick={openChainModal}
                    type="button"
                    className="lg:p-6 lg:text-xl"
                  >
                    Wrong Network
                  </Button>
                );
              }

              return (
                <div className="flex gap-3 items-center">
                  {/* Tombol untuk Ganti Chain */}
                  <Button
                    onClick={openChainModal}
                    variant="secondary"
                    size="icon"
                    className="flex items-center justify-center w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full shadow transition-all duration-200"
                  >
                    {chain.hasIcon && (
                      <div
                        className="w-6 h-6 rounded-full overflow-hidden"
                        style={{ background: chain.iconBackground }}
                      >
                        {chain.iconUrl && (
                          <Image
                            alt={chain.name ?? "Chain Icon"}
                            src={chain.iconUrl}
                            width={24}
                            height={24}
                          />
                        )}
                      </div>
                    )}
                  </Button>

                  {/* Tombol Klaim */}
                  <Button
                    onClick={() => {
                      // Tambahkan logika untuk klaim di sini
                      console.log("Claim clicked");
                    }}
                    className="lg:p-6 lg:text-xl"
                  >
                    Claim
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}

export default ButtonClaim;
