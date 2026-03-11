export default function Edge52TOPS() {
  return (
    <div
      className="text-gray-300 leading-relaxed"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <p className="text-lg text-gray-200 mb-8">
        There is a question that keeps coming up in conversations about AI
        infrastructure: can you run serious inference workloads without sending
        every request to a cloud API? Not a demo. Not a proof of concept. Actual
        production workloads, running continuously, on hardware you own.
      </p>

      <p className="mb-6">
        We built a system that does this. Five Raspberry Pis, two Hailo-8 AI
        accelerators, a custom mesh network, and a fleet management layer that
        keeps everything running without human intervention. The total hardware
        cost was under $400. The combined inference throughput is 52 TOPS --
        trillion operations per second.
      </p>

      <p className="mb-8">
        This is what we learned.
      </p>

      {/* Section 1 */}
      <h2
        className="text-2xl font-bold text-white mt-12 mb-6"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        The Hardware
      </h2>

      <p className="mb-6">
        The cluster runs on five nodes. Each one has a name and a role:
      </p>

      <ul className="list-none space-y-3 mb-6 pl-4 border-l border-white/10">
        <li className="pl-4">
          <strong className="text-white">Alice</strong> -- Raspberry Pi 400. The
          gateway node. Runs Pi-hole DNS, PostgreSQL, Qdrant vector database,
          and handles ingress for 48+ domains through a Cloudflare tunnel. The
          oldest node in the fleet.
        </li>
        <li className="pl-4">
          <strong className="text-white">Cecilia</strong> -- Raspberry Pi 5.
          Primary inference node. Runs Ollama with 16 models (4 custom-trained),
          TTS API, MinIO object storage. Has a Hailo-8 M.2 accelerator on the
          PCIe lane. Serial: HLLWM2B233704667.
        </li>
        <li className="pl-4">
          <strong className="text-white">Octavia</strong> -- Raspberry Pi 5.
          Storage and orchestration. 1TB NVMe over PCIe, self-hosted Gitea with
          207 repositories, Docker Swarm leader, NATS messaging. Second Hailo-8
          accelerator. Serial: HLLWM2B233704606.
        </li>
        <li className="pl-4">
          <strong className="text-white">Aria</strong> -- Raspberry Pi 5.
          Container orchestration via Portainer, Headscale for mesh VPN.
          Currently offline -- needs a physical reboot. More on that later.
        </li>
        <li className="pl-4">
          <strong className="text-white">Lucidia</strong> -- Raspberry Pi 5.
          Runs a FastAPI backend, a Next.js application, PowerDNS, and hosts 334
          static web apps. The most overloaded node, and the one that taught us
          the most about thermal management.
        </li>
      </ul>

      <p className="mb-6">
        The two Hailo-8 M.2 modules are the core of the inference capability.
        Each one delivers 26 TOPS of INT8 inference throughput through a
        dedicated neural processing unit. They connect to the Pi 5 via the
        single PCIe Gen 2 lane -- this is the reason the Pi 5 specifically
        matters. The Pi 4 has no PCIe. The Pi 400 (Alice) cannot use them.
      </p>

      <p className="mb-8">
        The cost breakdown is straightforward:
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-white/20">
              <th
                className="text-left py-3 pr-4 text-white"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Component
              </th>
              <th
                className="text-left py-3 pr-4 text-white"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Qty
              </th>
              <th
                className="text-right py-3 text-white"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Cost
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-400" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4">Raspberry Pi 5 (4GB)</td>
              <td className="py-2 pr-4">4</td>
              <td className="py-2 text-right">$240</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4">Raspberry Pi 400</td>
              <td className="py-2 pr-4">1</td>
              <td className="py-2 text-right">$70</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4">Hailo-8 M.2 module</td>
              <td className="py-2 pr-4">2</td>
              <td className="py-2 text-right">~$0*</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4">SD cards, cables, cases</td>
              <td className="py-2 pr-4">--</td>
              <td className="py-2 text-right">~$80</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4">1TB NVMe (Octavia)</td>
              <td className="py-2 pr-4">1</td>
              <td className="py-2 text-right">~$50</td>
            </tr>
            <tr className="border-t border-white/20">
              <td className="py-3 pr-4 text-white font-bold" colSpan={2}>
                Total
              </td>
              <td className="py-3 text-right text-white font-bold">~$440</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-500 mb-8">
        *The Hailo-8 modules were obtained through a developer program. Retail
        pricing varies. At current street prices of around $80-100 each, the
        total would be closer to $600. Still remarkable for 52 TOPS.
      </p>

      {/* Section 2 */}
      <h2
        className="text-2xl font-bold text-white mt-12 mb-6"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        The Network Layer
      </h2>

      <p className="mb-6">
        Five separate computers need a network. You could just plug them into a
        switch and call it done. We tried that first. It was not enough.
      </p>

      <p className="mb-6">
        The problem is multi-layered. You need encrypted communication between
        nodes (these are running sensitive workloads). You need DNS that you
        control. You need failover -- if one node goes down, traffic should
        reroute. And if you want to extend the cluster beyond your LAN, you need
        tunnels.
      </p>

      <p className="mb-6">
        We built RoadNet. Each Pi runs a WiFi access point on a non-overlapping
        channel:
      </p>

      <pre
        className="bg-[#0a0a0a] border border-white/10 rounded p-4 mb-6 overflow-x-auto text-sm"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <code className="text-gray-300">{`Node       Channel   Subnet          Role
Alice      1         10.10.1.0/24    Gateway, DNS
Cecilia    6         10.10.2.0/24    Inference primary
Octavia    11        10.10.3.0/24    Storage, orchestration
Aria       1         10.10.4.0/24    Container management
Lucidia    11        10.10.5.0/24    Web services`}</code>
      </pre>

      <p className="mb-6">
        On top of this, every node connects to a WireGuard mesh. The hub is a
        DigitalOcean droplet (Anastasia, in NYC), which gives us a stable
        endpoint for remote access. Each node gets a{' '}
        <code
          className="text-sm bg-white/5 px-1.5 py-0.5 rounded"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          10.8.0.x
        </code>{' '}
        address on the WireGuard interface. Traffic between nodes is encrypted
        end-to-end even on the local network.
      </p>

      <p className="mb-6">
        Alice runs Pi-hole, which gives us DNS-level ad blocking and the ability
        to define custom zones. Cecilia runs a secondary DNS with custom TLDs
        (.cece, .blackroad, .entity) for internal service discovery. When a
        model request comes in, DNS resolution determines which node handles it
        before any application logic runs.
      </p>

      <p className="mb-8">
        RoadNet persists across reboots via systemd services. Each node has both
        a{' '}
        <code
          className="text-sm bg-white/5 px-1.5 py-0.5 rounded"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          roadnet.service
        </code>{' '}
        and a{' '}
        <code
          className="text-sm bg-white/5 px-1.5 py-0.5 rounded"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          roadnet-failover.service
        </code>{' '}
        that monitors connectivity and reroutes traffic if a link drops.
      </p>

      {/* Section 3 */}
      <h2
        className="text-2xl font-bold text-white mt-12 mb-6"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        The Inference Stack
      </h2>

      <p className="mb-6">
        Cecilia is the primary inference node. It runs Ollama, which serves 16
        language models including 4 that were fine-tuned specifically for our use
        cases. The models range from small (1-3B parameter) task-specific models
        to 7B general-purpose ones. On a Pi 5 with 4GB of RAM, you cannot load a
        7B model and a 3B model simultaneously -- so Ollama handles model
        swapping, keeping the most recently used model hot in memory.
      </p>

      <p className="mb-6">
        The Hailo-8 accelerators handle a different class of workload. While
        Ollama runs transformer-based language models on the CPU, the Hailo
        modules excel at vision tasks: image classification, object detection,
        and preprocessing pipelines. The 26 TOPS per module is specifically INT8
        throughput, optimized for quantized neural network inference. You compile
        your models to the Hailo format using their SDK, and they run on the
        dedicated NPU without touching the ARM cores.
      </p>

      <p className="mb-6">
        Request routing works through a combination of DNS and a lightweight
        proxy. Each node runs a stats-proxy on port 7890 that reports its
        current load, available memory, and GPU utilization. When a request
        arrives at Alice (the gateway), it checks which nodes have capacity and
        routes accordingly. Language model requests go to Cecilia. Vision
        tasks can go to either Hailo-equipped node. Static content serves from
        Lucidia.
      </p>

      <p className="mb-8">
        For throughput numbers: Ollama on Cecilia generates roughly 8-12
        tokens/second on a 7B model (CPU inference, no GPU). The Hailo-8 can
        process image classification at around 200-300 FPS for mobilenet-class
        models. These are not datacenter numbers. But they are real numbers, on
        hardware that draws about 25 watts per node, running 24/7 without a
        monthly bill from AWS.
      </p>

      {/* Section 4 */}
      <h2
        className="text-2xl font-bold text-white mt-12 mb-6"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        What Actually Broke
      </h2>

      <p className="mb-6">
        If you are considering building something like this, here is what will
        bite you.
      </p>

      <h3
        className="text-lg font-bold text-white mt-8 mb-4"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Undervoltage
      </h3>

      <p className="mb-6">
        The Pi 5 wants 5V/5A from its USB-C power supply. Most USB-C power
        supplies deliver 5V/3A. When you add a Hailo-8 on the PCIe lane and an
        NVMe drive, you exceed what a 3A supply can deliver. The kernel notices
        and starts throttling.
      </p>

      <p className="mb-6">
        Cecilia was running at 0.869V (nominal is ~1.0V). Octavia was worse --
        0.750V before we intervened. You can check this yourself:
      </p>

      <pre
        className="bg-[#0a0a0a] border border-white/10 rounded p-4 mb-6 overflow-x-auto text-sm"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <code className="text-gray-300">{`$ vcgencmd get_throttled
throttled=0x50005

# Bit flags:
# 0: Under-voltage detected
# 2: Arm frequency capped
# 16: Under-voltage has occurred
# 18: Arm frequency capping has occurred`}</code>
      </pre>

      <p className="mb-8">
        The fix is a proper 5V/5A power supply. The official Raspberry Pi 27W
        USB-C supply works. Third-party PD supplies that negotiate 5V/5A also
        work. But most laptop chargers negotiate higher voltages (9V, 12V, 20V)
        and do not provide 5A at 5V. This is the single most common failure mode
        we encountered.
      </p>

      <h3
        className="text-lg font-bold text-white mt-8 mb-4"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Thermal Throttling
      </h3>

      <p className="mb-6">
        Octavia was overclocked to 2.6GHz. This worked fine during initial
        testing with light workloads. Under sustained inference load with the
        Hailo-8 active, the SoC hit its thermal limit and started throttling the
        CPU back to 1.5GHz -- worse than stock. We removed the overclock and
        set the CPU to 2.0GHz with a conservative governor.
      </p>

      <p className="mb-6">
        Lucidia had a different thermal problem. A background service was calling
        the Ollama API in a tight loop, generating tokens nobody was consuming.
        CPU temperature hit 73.8 degrees C. We killed the service and
        temperatures dropped to 57.9 degrees C. The lesson: before blaming
        hardware thermals, check what your software is doing.
      </p>

      <h3
        className="text-lg font-bold text-white mt-8 mb-4"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        SD Card Degradation
      </h3>

      <p className="mb-6">
        Lucidia runs off an SD card. After months of continuous writes (logs,
        databases, swap), we started seeing kernel messages:
      </p>

      <pre
        className="bg-[#0a0a0a] border border-white/10 rounded p-4 mb-6 overflow-x-auto text-sm"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <code className="text-gray-300">{`mmc0: Card stuck being busy! Data transfer aborted.`}</code>
      </pre>

      <p className="mb-6">
        Swap usage was climbing steadily -- 1.3GB of 8.5GB used, growing over
        time. SD cards have a finite number of write cycles. Swap on an SD card
        accelerates degradation significantly. The solution is an NVMe boot
        drive (like Octavia has), but that requires the PCIe lane -- the same
        lane the Hailo-8 uses. You have to choose: accelerator or fast storage.
        On Octavia, we chose storage. On Cecilia, we chose the Hailo-8. There is
        no right answer.
      </p>

      <h3
        className="text-lg font-bold text-white mt-8 mb-4"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        The Node That Just Died
      </h3>

      <p className="mb-8">
        Aria is currently offline. It does not respond to pings. It needs someone
        to physically walk over and power cycle it. No amount of remote
        management, WireGuard tunnels, or self-healing scripts can fix a kernel
        panic or a locked-up bootloader. This is the honest reality of running
        bare-metal infrastructure in your house: sometimes you have to touch
        the hardware.
      </p>

      {/* Section 5 */}
      <h2
        className="text-2xl font-bold text-white mt-12 mb-6"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Power Optimization
      </h2>

      <p className="mb-6">
        Five Pis running 24/7 is not free. At ~25W per node under load, the
        cluster draws roughly 125W. That is about $15/month in electricity at
        US average rates. Trivial compared to cloud costs, but we wanted to do
        better.
      </p>

      <p className="mb-6">We applied these changes across the fleet:</p>

      <pre
        className="bg-[#0a0a0a] border border-white/10 rounded p-4 mb-6 overflow-x-auto text-sm"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <code className="text-gray-300">{`# CPU governor: conservative (scales with load, not max)
echo conservative > /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor

# Reduce GPU memory to minimum (headless, no display)
# /boot/firmware/config.txt
gpu_mem=16

# Kernel tuning
# /etc/sysctl.d/99-blackroad-power.conf
vm.swappiness=10
vm.dirty_ratio=40

# WiFi power management
iw wlan0 set power_save on

# Disabled services (not needed on headless nodes)
systemctl disable lightdm cups cups-browsed rpcbind nfs-blkmap`}</code>
      </pre>

      <p className="mb-6">
        The results were measurable. Cecilia went from throttle flags{' '}
        <code
          className="text-sm bg-white/5 px-1.5 py-0.5 rounded"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          0x50000
        </code>{' '}
        (under-voltage has occurred) to{' '}
        <code
          className="text-sm bg-white/5 px-1.5 py-0.5 rounded"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          0x0
        </code>{' '}
        -- zero throttling. Octavia's voltage improved from 0.750V to 0.845V, a
        95mV improvement from removing the overclock alone. We set{' '}
        <code
          className="text-sm bg-white/5 px-1.5 py-0.5 rounded"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          gpu_mem=16
        </code>{' '}
        (down from 256MB on Octavia), freeing 240MB of RAM for actual workloads.
      </p>

      <p className="mb-8">
        Governor persistence on the Pi 5 is trickier than expected. The kernel
        ignores the{' '}
        <code
          className="text-sm bg-white/5 px-1.5 py-0.5 rounded"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          cpufreq.default_governor
        </code>{' '}
        cmdline parameter, so we use{' '}
        <code
          className="text-sm bg-white/5 px-1.5 py-0.5 rounded"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          tmpfiles.d
        </code>{' '}
        to write the governor at boot. Small details like this consume more
        debugging time than the actual architecture decisions.
      </p>

      {/* Section 6 */}
      <h2
        className="text-2xl font-bold text-white mt-12 mb-6"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        The Self-Healing Layer
      </h2>

      <p className="mb-6">
        Running five nodes means five things that can fail independently. We
        needed automation that could detect problems and fix them without waking
        anyone up.
      </p>

      <p className="mb-6">
        Each node runs two cron jobs. A heartbeat runs every minute -- it checks
        that the node can reach the WireGuard hub and reports its status. A heal
        job runs every five minutes -- it checks critical services (Ollama,
        stats-proxy, cloudflared) and restarts anything that has stopped. The
        logs go to{' '}
        <code
          className="text-sm bg-white/5 px-1.5 py-0.5 rounded"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          ~/.blackroad-autonomy/cron.log
        </code>{' '}
        so we can audit what the system fixed on its own.
      </p>

      <p className="mb-6">
        Alice has a separate watchdog on a 30-second timer that monitors a Redis
        task queue. Lucidia has a heartbeat on a 5-minute timer. Every node
        reports power metrics to a central log every 5 minutes via a power
        monitor script deployed fleet-wide.
      </p>

      <p className="mb-6">
        The system runs unattended. We have not SSH&apos;d into most of these
        nodes in weeks. When we do check in, the autonomy logs show a steady
        stream of small self-corrections: a service restart here, a reconnection
        there. The kind of things that would have been 3am alerts in a
        traditional setup.
      </p>

      <p className="mb-8">
        But the system is not infallible. Aria is down and has been for days. The
        self-healing layer cannot power cycle hardware. It cannot fix a
        corrupted SD card. It cannot solve the fundamental problem that Octavia
        gets a new DHCP address every time it reboots (it went from .97 to .100
        after the last power optimization reboot). Automation handles the 95%
        case. The remaining 5% still requires a human with physical access.
      </p>

      {/* Closing */}
      <h2
        className="text-2xl font-bold text-white mt-12 mb-6"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        What Comes Next
      </h2>

      <p className="mb-6">
        The cluster is stable enough now that we are building on top of it
        rather than constantly fixing it. The next layer is agent orchestration
        -- coordinating multiple AI models across nodes for complex tasks. We
        are prototyping a small language designed specifically for this: defining
        agent workflows, spawning concurrent tasks, and managing shared memory
        across the mesh. Early days, but the infrastructure is finally solid
        enough to support it.
      </p>

      <p className="mb-6">
        The fleet dashboard is live at{' '}
        <a
          href="https://blackroad.io"
          className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors"
        >
          blackroad.io
        </a>
        . The code that manages this infrastructure is on{' '}
        <a
          href="https://github.com/blackboxprogramming"
          className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        . The Gitea instance on Octavia has another 207 repositories that are
        not public yet. Some of them probably should be.
      </p>

      <p className="mb-6">
        The economics are simple. Our cluster costs about $15/month in
        electricity. A comparable cloud setup -- five instances with GPU access,
        persistent storage, private networking, and 24/7 uptime -- would run
        $500-1000/month depending on provider. The tradeoff is that nobody pages
        AWS when our hardware fails. We walk downstairs.
      </p>

      <p className="text-lg text-white mt-8">
        The cloud is someone else&apos;s computer. This is ours.
      </p>
    </div>
  )
}
